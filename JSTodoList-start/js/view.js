
import AddTodo from "./componentes/addToDo.js";
import Modal from "./componentes/modal.js";
import Filters from "./componentes/filters.js";
export default class View {
    constructor() {
        this.model = null;
        this.table = document.getElementById('table');
        this.addTodoForm = new AddTodo();
        this.modal = new Modal();
        this.addTodoForm.onClick((title, description) => { this.addTodo(title, description) })
        this.modal.onClick((id,values) => this.editTodo(id,values))
    
        /* 1
        const btn = document.getElementById('add');
        btn.onclick = () => {
            this.addTodo('Titulo', 'Desc');
        }
        */
       this.filters = new Filters();
       this.filters.onClick((filters) => this.filter(filters));

    }
    render(){
        const todos  = this.model.getTodos();
        /*
        for(const todo of todos){ // esto es como un foreach en java
            this.createRow(todo)
        }

        */
       todos.forEach((todo) => this.createRow(todo))
    }

    filter(filters){
        const {type, words} = filters; // sacar de filter los valores para las variables type y words
        const [, ...row] = this.table.getElementsByTagName("tr"); // queremos quitar la cabecera asi que se ignora el primer elemento
        for(const row  of rows ){
            const [title, description, completed] = row.children;
            let shouldHide = false;
        }

        if(words){
            shouldHide = !title.innerText.includes(words) && !description.innerText.includes(words)
        }

        const shouldBeCompleted = type === "completed"; 
        const isCompleted = completed.children[0].checked;

        if(type !== "all" &&    shouldHide !== isCompleted){
            shouldHide = true;
        }
        if(shouldHide){
            row.classList.add("d-none")
        }else{
            row.classList.remove("d-none")
        }


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

    toggleCompleted(id){
        this.model.toggleCompleted(id)
    }



    editTodo(id, values){

        this.model.editTodo(id, values)
        const row  = document.getElementById(id)
        row.children[0].innerHTML = values.title;
        row.children[1].innerHTML = values.description;
        row.children[2].children[0].checked = values.completed;
        console.log(id);
        console.log(values)
    }
    createRow(todo) {
        const row = table.insertRow(); // insertaremos una fila
        row.setAttribute('id', todo.id);
        // Permite crear un objeto HTML con cierto formato que seguramente debe ser reutilizado
        row.innerHTML = `
                <td>${todo.title} </td>
                <td>${todo.description} </td>
        
                <td class="text-center">
                    
                </td>
                <td class="text-right">
                    
                </td>
        `;

        // creación manual de un checkbox para relacionarlos con el código javascript
        const checkbox = document.createElement("input")
        checkbox.type = "checkbox"; 
        checkbox.checked = todo.completed;
        checkbox.onclick = () => this.toggleCompleted(todo.id);

        row.children[2].appendChild(checkbox); // insertar en el html etiqueta 2 es la q esta debajo de la de description

        const editBtn = document.createElement('button');
        editBtn.classList.add('btn', 'btn-primary', 'mb-1');
        editBtn.innerHTML = '<i class="fa fa-pencil" > </i> ';
        editBtn.setAttribute("data-toggle", "modal")
        editBtn.setAttribute("data-target", "#modal")
        editBtn.onclick = () => this.modal.setValues({
            id: todo.id,
            title: row.children[0].innerText,
            description: row.children[1].innerText,
            completed: row.children[2].children[0].checked,
        }); 

        
        row.children[3].appendChild(editBtn);


        const removeBtn = document.createElement('button');
        removeBtn.classList.add('btn', 'btn-danger', 'mb-1', 'm1-1');
        removeBtn.innerHTML = '<i class="fa fa-trash" > </i> ';
        removeBtn.onclick = () => this.removeTodo(todo.id);
        
        row.children[3].appendChild(removeBtn);
    }

}