export default class Model { // para importar primero debemos exportar....
    constructor() {

        this.view = null;
        //this.todos = []; 2 -- vamos a pasar de las listas para ya empezar a guardar datos en el navegador
        this.todos = JSON.parse(localStorage.getItem("todos")); // sirve para pasar a JSON los datos guardados en el navegador
        if (!this.todos || this.todos.length < 1) {
            this.todos = [
                {
                    id: 0,
                    title: "LearnJS",
                    description: "Watch JS tutorials",
                    completed: false,

                }

            ]
            this.currentId = 1;
        } else {
            this.currentId = this.todos[this.todos.length - 2].id + 1; // tomo el id del ultimo todo y le sumo 1
        }

        console.log(this.todos)


    }
    save() {

        localStorage.setItem("todos", JSON.stringify(this.todos));
    }

    setView(view) {
        this.view = view;
    }
    getTodos() {
        return this.todos;
    }
    addTodo(title, description) {
        const todo = {
            id: this.currentId++,
            title, // se puede omitir algunas cosas de querer el mismo nombre de la variable
            description,
            completed: false

        }

        this.todos.push(todo)
        console.log(this.todos)
        this.save();
        return { ...todo } // otra manera de clonar el todo
        //return Object.assign({}, todo) // indico q es un diccionario y creo un clon del mismo, eso evita que 
        //si modifico en la clase view el modelo sea afectado
    }

    findTodo(id) {
        return this.todos.findIndex((todo) => todo.id === id) // recorre cada elemento de la lista
        // cuando el predicado devuelva true, devuelve el indice de ese elemento.
    }
    toggleCompleted(id) {

        const index = this.findTodo(id)
        const todo = this.todos[index]
        todo.completed = !todo.completed
        console.log(this.todos)
        this.save();
        

    }


    removeTodo(id) {
        const index = this.findTodo(id)
        this.todos.splice(index, 1) // quiero borrar un elemento del modelo, con este indice.
        //console.log(this.todos[index])
        this.save();
        
    }
}