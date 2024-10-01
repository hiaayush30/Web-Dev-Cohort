const zod = require('zod');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../model/userModel');

const signupSchema = zod.object({
    username: zod.string().min(4, { message: "username must be atleast 4 characters long" }),
    password: zod.string().min(4, { message: "password must be atleast 4 characters long" })
})

const loginSchema = zod.object({
    username: zod.string({ message: "username required" }),
    password: zod.string("password must be atleast 6 characters long")
})

const signupHandler = async (req, res) => {
    const response = signupSchema.safeParse(req.body);
    if (!response.success) {
        const errorMessages = response.error.issues.map(issue => issue.message);
        return res.status(400).json({ error: 'username and password required', message: errorMessages });
    }
    const { username, password,email } = req.body;
    const user = await User.findOne({ username });
    if (user) return res.status(400).json({ error: 'user already exists!' })
    try {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, async (err, hashed) => {
                const user = await User.create({
                    username,
                    email,
                    password: hashed
                });
                const token = jwt.sign({ username, id: user._id }, process.env.JWT_PASS, { expiresIn: '1h' });
                //1h or 1d or 10m or 60s...
                res.setHeader('Authorization',`Bearer ${token}`);
                res.status(200).json({
                    message: 'signup successfull'
                });
            })
        })
    } catch (err) {
        console.log('error in generating hashed password');
        return res.status(500).json({
            error: "Internal Server error"
        })
    }
}

const loginHandler = async (req, res) => {
    //validate body 
    const response = loginSchema.safeParse(req.body);
    if (!response.success) {
        const errorMessages = response.error.issues.map(issue => issue.message);
        return res.status(400).json({ error: 'invalid request', message: errorMessages });
    }
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ error: "user not found" });
    const passwordCheck = await bcrypt.compare(password, user.password);
    if (!passwordCheck) return res.status(400).json({ error: "incorrect password" });
    const token = jwt.sign({ username, id: user._id }, process.env.JWT_PASS, { expiresIn: '1h' });
    res.setHeader('Authorization',`Bearer ${token}`);
    res.status(200).json({
        message: 'login successfull',
        username:user.username
    });
}

const logoutHandler=async(req,res)=>{
    res.clearCookie('token');
    res.status(200).json({message:"logged out successfully"});
}
module.exports = { signupHandler, loginHandler,logoutHandler }