const zod = require('zod');
const Todo = require('../model/todoModel');
const User = require('../model/userModel');

const todoSchema = zod.object({
    title: zod.string(),
})

const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find({createdBy:req.userid});
        res.status(200).json({
            todos
        })
    } catch (err) {
        res.status(500).json({ message: "Internal sever error" });
    }
}

//takes title in body
const createTodo = async (req, res) => {
    const validate = todoSchema.safeParse(req.body);
    if (!validate.success) return res.status(400).json({
        error: "invalid request"
    })
    try {
        const todo = await Todo.create({
            title: req.body.title,
            createdBy: req.userid
        });
        const user=await User.findOne({_id:req.userid});
        user.todos.push(todo._id);
        await user.save();
        res.status(200).json({
            message: "todo created successfully"
        })
    } catch (err) {
        res.status(500).json({ message: "Internal server error" });
    }
}

//takes id in params
const deleteTodo = async (req, res) => {
    const id = req.params.id;
    try {
        const todo = await Todo.deleteOne({ _id: id });
        if (!todo) return res.status(400).json({ error: "Todo with given id does not exist" });
        res.status(200).json({ message: "Todo deleted" });
    } catch (err) {
        console.log('error in deleting todo', +err);
        res.status(500).json({ message: "Internal server error" });
    }
}

//takes title or completed or both in body and id in params
const updateTodo = async (req, res) => {
    const id = req.params.id;

    const updatePayload = {};
    const { title, completed } = req.body;

    try {
        const todo = await Todo.findOne({ _id: id });
        if (!todo) return res.status(400).json({ message: "todo with given id not found" });

        if (title !== undefined) todo.title = title
        if (completed !== undefined) todo.completed = completed
        await todo.save();
        res.status(200).json({ message: "todo updated" });
    } catch (err) {
        console.log('error in updating todo:' + err);
        res.status(500).json({ message: "Internal server error" });
    }
}

const getInfo = async (req, res) => {
    const todoid = req.params.id;
    try {
        const todo = await Todo.findOne({ _id: todoid });
        if (todo.createdBy.toString() !== req.userid) return res.status(400).json({ message: "not authorized" });
        await todo.populate('createdBy');
        res.status(200).json({
            user: todo.createdBy
        })
    } catch (err) {
        res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = { createTodo, getTodos, deleteTodo, updateTodo, getInfo }