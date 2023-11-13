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

function renderTodos(todos) {
    let todoList = document.getElementById(`todoList`);
    todoList.innerHTML = "";

    for (const task of todos) {
        todoList.innerHTML = 
        `
        <li data-testid="toDoItem">${task.text}<span><button>"Remove"</button></span></li>
        `
    }
}