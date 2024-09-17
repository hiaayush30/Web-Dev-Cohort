//state derived frontends=> you have to update the state and the 
//frontend will be updated by someone else(render fn or react)
let todos = [];   //state
let count = 0;

function addTodo() {  //changing state 
    todos.push({
        id: count,
        title: document.querySelector("input").value,
        editable: false,
        completed: false
    })
    document.querySelector('input').value = '';
    count++;
    render();
}

function deleteTodo(index) {   //changing state
    todos = todos.filter(todo => todo.id != index);
    render();
}

function editTodo(index) {
    todos = todos.map(todo => {
        if (todo.id == index) {
                todo.editable=!todo.editable
        }
        return todo;
    })
    render();
}

function handleEdited(index,value){
    todos=todos.map(todo=>{
        if(todo.id==index){
            todo.editable=false;
            todo.title=value;
        }
        return todo;
    })
    render();
}

function todoCompleted(index){
    todos=todos.map(todo=>{
        if(todo.id==index){
            todo.completed=!todo.completed
        }
        return todo;
    })
    render();
}

function createTodoComponent({ id, title, completed, editable }) {   //component (created by us)
    const todoDiv = document.createElement('div');
    const header = editable ?
        document.createElement('input') :
        document.createElement('span');
    header.innerText = title;
    header.value=title;
    if(completed){
        header.style.textDecoration='line-through'
    }
    const button = document.createElement('button');
    button.innerText = 'delete';
    button.addEventListener('click', () => {
        deleteTodo(id);
    });

    const editBtn = document.createElement('button');
    if(editable){
        editBtn.innerText='Done'
        editBtn.onclick=()=>{
            handleEdited(id,header.value);
        }
    }else{
    editBtn.innerText ='Edit';
    editBtn.addEventListener('click', () => {
        editTodo(id);
    })}

    const doneBtn=document.createElement('button');
    doneBtn.innerText=completed?'Undo':'Done';
    doneBtn.onclick=()=>{
        todoCompleted(id);
    }
    todoDiv.appendChild(header);
    todoDiv.appendChild(editBtn);
    todoDiv.appendChild(doneBtn);
    todoDiv.appendChild(button);
    return todoDiv;
}

function render() {//rerenders component when state is changed (done by react)
    document.querySelector('.todos').innerHTML = '';  //clear the list
    //react takes a more optimized approach finding the diff in the state
    //which is known as RECONCILIATION
    todos.forEach(todo => {
        document.querySelector('.todos')
            .appendChild(createTodoComponent(todo));
    })
}