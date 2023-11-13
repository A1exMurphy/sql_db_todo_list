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
    
}