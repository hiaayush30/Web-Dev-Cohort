
const {Router}=require('express');
const {createTodo, getTodos, deleteTodo, updateTodo,getInfo} = require('../controllers/todo');
const todoAuth = require('../middleware/todoMiddleware');
const todoRouter=Router();

todoRouter.use(todoAuth)

todoRouter.get('/todos',getTodos);
todoRouter.post('/create',createTodo);
todoRouter.delete('/delete/:id',deleteTodo);
todoRouter.patch('/update/:id',updateTodo);
todoRouter.get('/info/:id',getInfo)

module.exports=todoRouter;