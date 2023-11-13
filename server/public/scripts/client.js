// const { response } = require("express");

console.log('JS is sourced!');

//run getTodos to render the db upon page load
getTodos();

function getTodos() {
    axios({
        type: 'GET',
        url: '/todos'
    }).then(res => {
        renderTodos(res.data)
    })
}

//make a function to run on submit button and add a task to list
function addTodos(event) {
    event.preventDefault();
    console.log("running POST route");
console.log(document.getElementById(`toDoTextInput`).value);
    let task = {text: document.getElementById(`toDoTextInput`).value,
                isComplete: false};
            
            
            document.getElementById(`toDoTextInput`).value = "";
        
        axios({
            url: '/todos',
            method: 'POST',
            data: task,
        }).then((response) => {
        getTodos();
        }).catch((error) => {
            console.log(error, `Error in adding task`);
            alert(`failed to add task to Todo List`);
        })
}











function renderTodos(todos) {
    let todoList = document.getElementById(`todoList`);
    todoList.innerHTML = "";

    for (const task of todos) {
        todoList.innerHTML = 
        `
        <li data-testid="toDoItem">
            <span>
                <button data-testid="completeButton">"Complete"</button>
            </span>
                ${task.text}
            <span>
                <button data-testid="deleteButton">"Remove"</button>
            </span>
        </li>
        `
    }
}