export default class Model { // para importar primero debemos exportar....
    constructor(){

        this.view = null;
        this.todos = [];
        this.currentId = 0;

    }

    setView(view){
        this.view = view;
    }
    getTodos(){
        return this.todos;
    }
    addTodo(title, description){
        const todo = {
            id: this.currentId++,
            title, // se puede omitir algunas cosas de querer el mismo nombre de la variable
            description,
            completo: false

        }

        this.todos.push(todo)
        console.log(this.todos)
        return {...todo} // otra manera de clonar el todo
        //return Object.assign({}, todo) // indico q es un diccionario y creo un clon del mismo, eso evita que 
        //si modifico en la clase view el modelo sea afectado
    }


    removeTodo(id){
        const index = this.todos.findIndex((todo) => todo.id === id) // recorre cada elemento de la lista
        // cuando el predicado devuelva true, devuelve el indice de ese elemento.
        this.todos.slice(index,1) // quiero borrar un elemento del modelo, con este indice.
        //console.log(this.todos[index])

    }
}