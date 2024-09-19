// Assignment #2

// Filesystem based todo list.

// Create a `cli` that lets a user

// 1. Add a todo
// 2. Delete a todo
// 3. Mark a todo as done

// Store all the data in files (todos.json)

const { Command } = require('commander');
const fs=require('fs');
const program = new Command();
const uniqid = require('uniqid'); 

program
  .name('todo-cli')
  .description('CLI to add,delete,view and update todo')
  .version('1.0.0');

  program.command('store')
  .description('create and store a todo given with the given title')
  .argument('<title>', 'title to store')
  .action((str) => {
    let todos=fs.readFileSync('todos.json','utf-8');
    todos=JSON.parse(todos);
    todos.push({
        id:uniqid(),
        title:str,
        completed:false
    });
    fs.writeFileSync('todos.json',JSON.stringify(todos),'utf-8');
    console.log('todo created');
  });

  program.command('view')
  .description('view all the created todos')
  .action(() => {
    let todos=fs.readFileSync('todos.json','utf-8');
    todos=JSON.parse(todos);
    console.log('todos:'+JSON.stringify(todos));
  });

  program.command('delete')
  .description('delete a todo')
  .argument('<id>', 'id of the todo to delete')
  .action((str) => {
    let todos=fs.readFileSync('todos.json','utf-8');
    todos=JSON.parse(todos);
    todos=todos.filter(todo=>todo.id!=str);
    fs.writeFileSync('todos.json',JSON.stringify(todos),'utf-8');
    console.log('todo deleted!');
  });

  program.command('done')
  .description('mark a todo as done')
  .argument('<id>', 'id of the todo to mark as completed')
  .action((str) => {
    let todos=fs.readFileSync('todos.json','utf-8');
    todos=JSON.parse(todos);
    todos=todos.map(todo=>{
        if(todo.id==str) todo.completed=true;
        return todo;
    })
    fs.writeFileSync('todos.json',JSON.stringify(todos),'utf-8');
    console.log('todo marked as done!');
  });

   program.parse();

