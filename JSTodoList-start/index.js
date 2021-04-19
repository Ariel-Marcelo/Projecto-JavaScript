//DOMContentLoaded representa a todo el documento html e indica que no se debe ejecutar el js 
// hasta que se cargue todo el html.
document.addEventListener('DOMContentLoaded', function () {
    const title = document.getElementById('title');// es un input
    const description = document.getElementById('description');// es un input
    const table = document.getElementById('table');
    const alert = document.getElementById('alert'); // es un label html
    const btn = document.getElementById('add');

    function addTodo() {
        /* el === sirve para comparar tambien el tipo de dato ya que como es tipado debil entonces 
        para javascript 2 == '2' es verdad, tambien el 0 identifica como false, 1 es true y null es false y 
        tener cualquier cadena o número puede ser verdadero
        */
        if (title.value === '' || description.value === '') {
            // es necesario quitar el display none para que aparezca un elemento 
            alert.classList.remove('d-none'); // classList llama a las clases del css para remover el 'd-none'
            alert.innerText = 'Soy una etiqueta de error';
            return;
        }

        alert.classList.add('d-none'); // para q no sea visible la etiqueta de Error
        const row = table.insertRow(); // insertaremos una fila
        // Permite crear un objeto HTML con cierto formato que seguramente debe ser reutilizado
        row.innerHTML = `
                <td>${title.value} </td>
                <td>${description.value} </td>
        
                <td class="text-center">
                    <input type="checkbox">
                </td>
                <td class="text-right">
                    <button class="btn btn-primary mb-1">
                    <i class="fa fa-pencil"></i>
                    </button>
                    <button class="btn btn-danger mb-1 ml-1">
                    <i class="fa fa-trash"></i>
                    </button>
                </td>
        `;
    }

    btn.onclick = addTodo;
});



/*
    En jascript concatenas cualquier elemento con $ ejemplo: 'cad' ${valor} 
    En donde valor = 5, Salida cad 5

    const aAñadir = document.createElement('aAñadir');  se puede agregar ciertos elementos al hhml con este método
    aAñadir.innerHTML = 'Texto'; 
    Texto puede contener HTML
    const a = document.getEmentById('id')
    const b = a.document.getElemensByName('tbody')
    // tbody es una parte del objeto seleccionado en htmal y  se le puede añidir texo incluso html

    b.appendChild(sAñadir);
*/ 

/*
Esta es una función---

btn.onclick = function(){
        console.log('Title: ', title.value);
        console.log('description: ', description.value)
    }
*/

/*
Simplemente escribe en consola si se preciona el boton btn.....
btn.addEventListener('click', function() {
    console.log('Click');
});
*/
