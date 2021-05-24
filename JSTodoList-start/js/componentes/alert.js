export default class Alert {
    constructor(alertID) {
        this.alert = document.getElementById(alertID)
    }

    show(message) {
        // es necesario quitar el display none para que aparezca un elemento 
        this.alert.classList.remove('d-none'); // classList llama a las clases del css para remover el 'd-none'
        this.alert.innerText = message;
    }

    hide() {
        this.alert.classList.add("d-none")
    }
}