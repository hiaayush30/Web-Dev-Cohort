const jwt = require('jsonwebtoken');
const authMiddleware = (req, res, next) => {
    const token=req.headers['authorization'];
    if (!token) return next();
    try {
        const decoded = jwt.verify(token.split(' ')[1], process.env.JWT_PASS);
        req.username=decoded.username;
        req.id=decoded.id;
        res.status(200).json({
            message:'logged in successfully',
            username:req.username
        })
    } catch (err) {
        res.status(400).json({
            error:'Invalid or expired token!'
        })
    }
}

module.exports=authMiddleware;
