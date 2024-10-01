//what we have created below are stateful tokens
//JWT are stateless tokens which we create
//Cookie is just another header but with a special property that the
//browser automatically sets them in the header
const express = require('express');
const fs = require('fs');
const crypto = require('crypto');
const app = express();

app.use(express.json());

let users;
app.use((req, res, next) => {
    users = fs.readFileSync('users.json', { encoding: 'utf-8' });
    users = JSON.parse(users);
    next()
})

const generateToken = (username, password) => {
    let hash = crypto
        .createHash('sha256')
        .update(`${username}${password}`)
        .digest('hex')
    return hash;
}

app.post('/signup', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) return res.status(400).json({ message: 'bad request' });
    const token = generateToken(username, password);
    users.push({
        username, password, token
    });
    fs.writeFileSync('users.json', JSON.stringify(users), { encoding: 'utf-8' });
    res.status(200).json({ message: 'success' });
})

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) return res.status(400).json({ message: 'bad request' });
    //const user=users.filter(user=>user.username==username && user.password==password);
    //if(user.length==0) return res.status(403).json({message:'invalid user'});
    //above will return an array
    //better way to use find function
    const user = users.find(user => {
        return user.username == username && user.password == password
    })
    if (!user) return res.status(400).json({ message: 'user not found' });
    return res.status(400).json({
        message: 'login successfull',
        token: user.token
    })
})

//creating an authenticated route/endpoint
app.get('/me',(req,res)=>{
    const {token}=req.headers;
    if(!token)return res.status(403).json({message:"invalid request"});
    const user=users.find(user=>{
        return user.token===token
    });
    if(!user) return res.status(400).json({message:'invalid token'});
    return res.status(200).json({
        username:user.username
    })
})

app.listen(3000);