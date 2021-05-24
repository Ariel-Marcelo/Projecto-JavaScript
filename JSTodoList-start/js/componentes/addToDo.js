// en este archivo añadiremos cosas con js
import Alert from "./alert.js";
export default class AddTodo {

    constructor() {
        this.title = document.getElementById('title');// es un input
        this.description = document.getElementById('description');// es un input
        this.btn = document.getElementById('add');
        this.Alert = new Alert("alert");
    }
    // callBack es una función
    onClick(callBack){
        this.btn.onclick = () =>{
            if (title.value === '' || description.value === '') {
                this.Alert.show("Titulo y Descripción Requerido")
            }else{
                this.Alert.hide();
                callBack(this.title.value, this.description.value)
            }
        }
    }
}