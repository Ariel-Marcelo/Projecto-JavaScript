export default class Filters{
    constructor(){
        this.form = document.getElementById("filters") // este es el formulario que contiene las opciones de filtrado type y  el titulo buscado Words
        this.btn = document.getElementById("search")
    }

    onClick(callBack){
        this.btn.onclick = (evento) => {
            evento.preventDefault();// Evita que el evento refresque la página (que lo envie al servidor)
            const data = new FormData(this.form);
            
            callBack({
                type: data.get("type"), 
                words: data.get("words"),
            })
            
        }
    }
}