export default class Model { // para importar primero debemos exportar....
    constructor(){

        this.view = null;
        this.todos = []; // este es un arreglo y como no es tipado puedes meter cualquier cosa

    }

    setView(view){
        this.view = view;
    }
    getTodos(){
        return this.todos;
    }
    addTodo(title, description){
        const todo = {

            id: 0,
            title: title,
            description: description,
            completed: false,
        }

        this.todos.push(todo);
        console.log(this.todos);

        return Object.assign({}, todo); // clon , objeto al vacío al cual se le asigna todas las propiedades del objeto todo
    }
}