const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', editTodo);

function addTodo(e){
    e.preventDefault();

    if(todoInput.value.length == 0){
        alert("N'oubliez pas d'ajouter votre tâche");
    }else{
        const newTodo = document.createElement('li');

        const contentTodo = document.createElement('div');
        contentTodo.textContent = todoInput.value;
        
        const editTodo = document.createElement('div');
        const doneTodo = document.createElement('i');
        doneTodo.classList.add('fas');
        doneTodo.classList.add('fa-check');
        doneTodo.classList.add('done-btn');
        const deleteTodo = document.createElement('i');
        deleteTodo.classList.add('fas');
        deleteTodo.classList.add('fa-trash-alt');
        deleteTodo.classList.add('delete-btn');

        editTodo.appendChild(doneTodo);
        editTodo.appendChild(deleteTodo);
        
        newTodo.appendChild(contentTodo);
        newTodo.appendChild(editTodo);
        
        todoList.appendChild(newTodo);

        todoInput.value = '';
    }
}

function editTodo(e){
    const item = e.target;
    const toEdit = item.parentElement.parentElement;

    if(item.classList.contains('delete-btn')){
        toEdit.remove();
    }
    if(item.classList.contains('done-btn')){
        toEdit.classList.toggle('done');
    }
}