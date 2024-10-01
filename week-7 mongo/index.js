const express = require("express");
const { zod: z } = require('zod');
const { UserModel, TodoModel } = require("./db");
const { auth, JWT_SECRET } = require("./auth");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

mongoose.connect("")

const app = express();
app.use(express.json());

const signupSchema = z.object({
    email: z.string().email(),
    password: z.string().min(3, 'password must be atleast 3 characters').max(10),
    name: z.string()
})

app.post("/signup", async function (req, res) {
    const schemaCheck = signupSchema.safeParse(req.body);
    if (!schemaCheck.success) return res.status(400).json({ message: 'invalid request' });
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    const findUser = await UserModel.findOne({ email });
    if (findUser) return res.status(400).json({ message: 'email already registered!' });

    const salt = bcrypt.genSaltSync(10);
    const hashedPass = bcrypt.hashSync(password, salt);
    await UserModel.create({
        email: email,
        password: hashedPass,
        name: name
    });

    res.json({
        message: "You are signed up"
    })
});


app.post("/signin", async function (req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const response = await UserModel.findOne({
        email: email,
    });

    const passMatch = bcrypt.compareSync(password, response.password);

    if (response && passMatch) {
        const token = jwt.sign({
            id: response._id.toString()
        }, JWT_SECRET);

        res.json({
            token
        })
    } else {
        res.status(403).json({
            message: "Incorrect creds"
        })
    }
});


app.post("/todo", auth, async function (req, res) {
    const userId = req.userId;
    const title = req.body.title;
    const done = req.body.done;

    await TodoModel.create({
        userId,
        title,
        done
    });

    res.json({
        message: "Todo created"
    })
});


app.get("/todos", auth, async function (req, res) {
    const userId = req.userId;

    const todos = await TodoModel.find({
        userId
    });

    res.json({
        todos
    })
});

app.listen(3000);