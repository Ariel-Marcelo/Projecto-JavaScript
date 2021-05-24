import Model from './model.js';
import View from './view.js';
document.addEventListener('DOMContentLoaded', function () {
    const model = new Model();
    const view = new View();
    model.setView(view);
    view.setModel(model);
    view.render();
})

/*
se puede pasar funciones como parametros

function t (num, c)
{
    return c(num); 

}

function z (num){
    return num * 2;
}

t(5, z);

*/

