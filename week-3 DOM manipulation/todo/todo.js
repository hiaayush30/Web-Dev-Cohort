let count=1;
const addTodo=()=>{
    const currCount=count;
    count++;
    const todoDiv=document.createElement('div');
    todoDiv.className=`todo-${currCount}`
    const input=document.querySelector('input');
    const todo=document.createElement('span');
    const button=document.createElement('button');
    button.addEventListener('click',()=>{
        deleteTodo(`.todo-${currCount}`)
    // deleteTodo(`.todo-${count}`) will not work due to closure
    // When you set up an event listener (or any function inside another function),
    // Js creates a closure. This means the inner function (your click event handler)
    // remembers the variables from the outer function where it was created.

    // However, closures don't just "freeze" the value of the variables when the
    // function is defined—they keep a reference to those variables. So, if the outer 
    // variable (count in this case) changes later, the closure will "see" the new
    // value, not the original value when the function was created.
    })
    button.innerHTML="Delete";
    todo.innerText=input.value;
    input.value='';
    todoDiv.appendChild(todo);
    todoDiv.appendChild(button);
    document.querySelector('.todos').appendChild(todoDiv);
}

const deleteTodo=(divName)=>{
    const todo=document.querySelector(divName);
    todo.remove();
}