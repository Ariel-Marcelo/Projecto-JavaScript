export default class View{
    constructor(){
        this.model = null;
        this.table = document.getElementById('table');
        const btn = document.getElementById('add');
        btn.onclick = function () {
            this.addTodo('Titulo', 'Desc');
        }
    }

    setModel(model) {
        this.model = model;
    }
    addTodo(title, descripotion) {
        console.log(title, descripotion);
    }

}