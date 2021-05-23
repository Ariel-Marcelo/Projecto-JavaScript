// en este archivo añadiremos cosas con js
export default class AddTodo {

    constructor() {
        this.title = document.getElementById('title');// es un input
        this.description = document.getElementById('description');// es un input
        this.btn = document.getElementById('add');
    }
    // callBack es una función
    onClick(callBack){
        this.btn.onclick = () =>{
            if (title.value === '' || description.value === '') {
                console.log("Incorrecto")
            }else{
                callBack(this.title.value, this.description.value)
            }
        }
    }
}