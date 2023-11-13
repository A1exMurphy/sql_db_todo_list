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



//functions to cross off and remove entirely tasks from list
function markComplete(event) {
    event.preventDefault();
    console.log(`cross off list task`);
    let taskId = (event.target.closest('li').getAttribute('id'))

        axios({
            url: `todos/${taskId}`,
            method: `PUT`
        }).then((response) => {
            // applyCompleteClass();
            getTodos();
        }).catch((error) => {
            console.log(error, 'error completing task');
            alert('error completing task');
        })

}

function removeTask(event) {
    event.preventDefault();
    console.log(`removed task from list`);

    let taskId = (event.target.closest('li').getAttribute('id'))
    console.log(taskId);

        axios({
            url: `todos/${taskId}`,
            method: `DELETE`
        }).then((response) => {
            getTodos();
        }).catch((error) => {
            console.log(error, 'delete task error');
            alert('delete task error');
        })
}


function applyCompleteClass(task) {
    document.getElementById(`${task.id}`).classList.remove(`inComplete`);
    document.getElementById(`${task.id}`).classList.add(`completed`);
}

function renderTodos(todos) {
    let todoList = document.getElementById(`todoList`);
    todoList.innerHTML = "";

    for (const task of todos) {
        todoList.innerHTML += 
        `
        <li id=${task.id} data-testid="toDoItem">
            <span>
                <button id="completeButton" data-testid="completeButton" onclick="markComplete(event)"
                    >Complete
                </button>
            </span>
                ${task.text}
            <span>
                <button id="deleteButton" data-testid="deleteButton" onclick="removeTask(event)"
                    >Remove
                </button>
            </span>
        </li>
        `
        if(task.isComplete === true) {
            applyCompleteClass(task);
        } else if(task.isComplete === false) {
            document.getElementById(`${task.id}`).classList.add(`inComplete`);
        }
    }
}