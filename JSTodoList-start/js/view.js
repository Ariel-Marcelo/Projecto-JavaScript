export default class View{
    constructor(){
        this.model = null;
        this.table = document.getElementById('table');
        const btn = document.getElementById('add');
        btn.onclick =  ()=> { // esta es una arrow function 
            this.addTodo('Titulo', 'Desc');// la función ayudo a this.addTodo pudiera referirse al método de la clase view y no buscará this.addTodo dentro de la función arrow.
        }
    }

    // funciones anonimas revisar.... son como dar un parametro a una funcion, parametro q a su ves se usara como entrada para devolver un resultado dentro de otra

    setModel(model) {
        this.model = model;
    }
    addTodo(title, descripotion) {
        const todo = this.model.addTodo(title, descripotion);
        todo.title = 'YOUTUBE';
    }

}