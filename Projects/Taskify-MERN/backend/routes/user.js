const {Router}=require('express');
const authMiddleware = require('../middleware/userMiddleware');

const { signupHandler,loginHandler, logoutHandler} = require('../controllers/user');
const userRouter=Router();

userRouter.use(authMiddleware);

userRouter.post('/signup',signupHandler);
userRouter.post('/login',loginHandler);
userRouter.post('/logout',logoutHandler);

module.exports=userRouter;