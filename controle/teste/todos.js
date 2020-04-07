var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector('#app input');
var buttonElemente = document.querySelector('#app button');

var todos = [
    'Fazer café',
    'Estudar Js',
    'Dormir Cedo'
]

function renderTodos() {

    listElement.innerHTML = '';

    for(todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);
        
        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);
    }
}

renderTodos();


function addTodos() {

    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
}

buttonElemente.onclick = addTodos;
