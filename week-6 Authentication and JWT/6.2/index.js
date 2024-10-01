const cors=require('cors');
const express = require('express');
const jwt = require('jsonwebtoken');
const authMiddleware = require('./middleware/authMiddleware');
const app = express();

app.use(cors({
    origin:'http://localhost:16023',
    exposedHeaders:['token']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req,res,next)=>{
    const date=new Date();
    console.log(`request recieved on ${req.path} at  ${date.toLocaleTimeString()} on ${date.toLocaleDateString()}`);
    next();
})
const users = [];

app.post("/signup", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,
        password: password
    })    

    res.json({
        message: "You are signed up"
    })

    console.log(users)
    
})

app.post("/signin", function(req, res) {
    
    const username = req.body.username;
    const password = req.body.password;

    // maps and filter
    let foundUser = null;
    for (let i = 0; i<users.length; i++) {
        if (users[i].username == username && users[i].password == password) {
            foundUser = users[i]
        }
    }

    if (foundUser) {
        const token = jwt.sign({
            username: username,
            password: password,
            courses: []
        },"JWT_PASS") ;

        // foundUser.token = token;
        res.json({
            token: token
        })
    } else {
        res.status(403).send({
            message: "Invalid username or password"
        })
    }
    console.log(users)
})

app.get("/me",authMiddleware,function(req, res) {
    // const token = req.headers.token // jwt
    // const decodedInformation = jwt.verify(token, 'JWT_SECRET');  // {username: "harkirat@gmail.com"}
    // const unAuthDecodedinfo = jwt.decode(token,);  // {username: "harkirat@gmail.com"}
    // const username = decodedInformation.username
    const {username}=req.token;
    let foundUser = null;

    for (let i = 0; i < users.length; i++) {
        if (users[i].username == username)  {
            foundUser = users[i]
        }
    }

    if (foundUser) {
        res.json({
            username: foundUser.username,
            password: foundUser.password
        })
    } else {
        res.json({
            message: "token invalid"
        })
    }


})


app.listen(3000);// that the http server is listening on port 3000
