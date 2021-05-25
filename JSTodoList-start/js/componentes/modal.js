// El modal en el html es una ventana emergente para editar un campo, y esta clase ayudará a controlarlo
import Alert from "./alert.js"
export default class Modal{
    constructor(){
        this.title  = document.getElementById("modal-title")
        this.description = document.getElementById("modal-description");
        this.btn = document.getElementById("modal-btn");
        this.completed = document.getElementById("modal-completed");
        this.todo = null
        this.alert = new Alert("modal-alert");


    }
    // aparecen los datos pre-existententes en la ventana emergente para cambiarlos
    setValues(todo){
        this.todo = todo;
        this.title.value = todo.title;
        this.description.value = todo.description;
        this.completed.checked = todo.completed;

    }
    

    onClick(callBack){
        this.btn.onclick = () =>{
            if (this.title.value === '' || this.description.value === '') {
                this.alert.show("Titulo y Descripción Requerido")
                return;
            }
                
            $('#myModal').modal('toggle') // esta es una libreria de bootstrap que es un Frame del CSS que estamos usando
            // sirve para ingresar codigo js y ayudar para a  ocultar el modal
            callBack(this.todo.id, {
                title: this.title.value,
                description: this.description.value,
                completed : this.completed.checked,
            })
        }
    }
}