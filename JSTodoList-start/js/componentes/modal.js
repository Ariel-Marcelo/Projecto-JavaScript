// El modal en el html es una ventana emergente para editar un campo, y esta clase ayudará a controlarlo

export default class Modal{
    constructor(){
        this.title  = document.getElementById("modal-title")
        this.description = document.getElementById("modal-description");
        this.btn = document.getElementById("modal-btn");
        this.completed = document.getElementById("modal-completed");

    }
    // aparecen los datos pre-existententes en la ventana emergente para cambiarlos
    setValues(todo){
        this.title.value = todo.title;
        this.description = todo.description;
        this.completed = todo.completed;

    }

    onClick(callBack){
        this.btn.onclick = () =>{
            if (title.value === '' || description.value === '') {
                this.alert.show("Titulo y Descripción Requerido")
                return;
            }
                
            $('#myModal').modal('toggle') // esta es una libreria de bootstrap que es un Frame del CSS que estamos usando
            // sirve para ingresar codigo js

        }
    }
}