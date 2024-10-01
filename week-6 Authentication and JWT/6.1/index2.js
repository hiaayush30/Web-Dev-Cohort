//stateless authentication using jwt
//users2.json acts as our db for now
const jwt=require('jsonwebtoken');
const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());

let users;
app.use((req, res, next) => {
    users = fs.readFileSync('users2.json', { encoding: 'utf-8' });
    users = JSON.parse(users);
    next()
})

const generateToken = (username) => {
    return jwt.sign({username},"MY_SECRET_PASS");
}

app.post('/signup', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) return res.status(400).json({ message: 'bad request' });
    const token = generateToken(username);
    users.push({
        username, password
    });
    fs.writeFileSync('users2.json', JSON.stringify(users), { encoding: 'utf-8' });
    res.status(200).json({ 
        message: 'signup successfull',
     });
})

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) return res.status(400).json({ message: 'bad request' });
    const user = users.find(user => {
        return user.username == username && user.password == password
    })
    if (!user) return res.status(400).json({ message: 'user not found' });
    const token=generateToken(username);
    return res.status(400).json({
        message: 'login successfull',
        token
    })
})

//creating an authenticated route/endpoint
app.get('/me',(req,res)=>{
    const {token}=req.headers;
    if(!token)return res.status(403).json({message:"invalid request"});
    try{
       const user=jwt.verify(token,"MY_SECRET_PASS");

       const myuser=users.find(person=>person.username==user.username);
       if(!myuser)res.status(400).json('Something went wrong,could not find user'); 
       
       return res.status(200).json({
        username:myuser.username,
        password:myuser.password
    })
    }catch(err){
        res.status(400).json({
            message:err.message
        })
    } 
})

app.listen(3000);