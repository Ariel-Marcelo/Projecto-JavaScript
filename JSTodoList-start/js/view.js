import AddTodo from "./componentes/addToDo.js";
export default class View {
    constructor() {
        this.model = null;
        this.table = document.getElementById('table');
        this.addTodoForm = new AddTodo();
        this.addTodoForm.onClick((title, description) => { this.addTodo(title, description) })
        /* 1
        const btn = document.getElementById('add');
        btn.onclick = () => {
            this.addTodo('Titulo', 'Desc');
        }
        */
    }

    setModel(model) {
        this.model = model;
    }
    addTodo(title, descripotion) {
        const todo = this.model.addTodo(title, descripotion)
        this.createRow(todo)
        /*
        const miModelo = this.model.addTodo(title, descripotion)
        miModelo.titulo  = "Youtube" // podemos ingresar incluso otro campo en el diccionario, como descripción etc.
        console.log(miModelo);
        */
    }
    removeTodo(id){
        this.model.removeTodo(id);
        document.getElementById(id).remove();
    }
    createRow(todo) {
        const row = table.insertRow(); // insertaremos una fila
        row.setAttribute('id', todo.id);
        // Permite crear un objeto HTML con cierto formato que seguramente debe ser reutilizado
        row.innerHTML = `
                <td>${todo.title} </td>
                <td>${todo.description} </td>
        
                <td class="text-center">
                    <input type="checkbox">
                </td>
                <td class="text-right">
                    <button class="btn btn-primary mb-1">
                    <i class="fa fa-pencil"></i>
                    </button>
                </td>
        `;

        const removeBtn = document.createElement('button');
        removeBtn.classList.add('btn', 'btn-danger', 'mb-1', 'm1-1');
        removeBtn.innerHTML = '<i class="fa fa-trash" > </i> ';
        removeBtn.onclick = () => this.removeTodo(todo.id);
        
        row.children[3].appendChild(removeBtn);
    }

}