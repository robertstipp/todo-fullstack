const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const authenticationController = {
    createCookie: async function (req, res, next) {
        console.log('authController.createCookie')
        const { username } = req.body;
        const {user_id} = res.locals.user; 
        console.log('<<<', user_id);
        if(req.cookies.token) return next();
        const token = await jwt.sign({id: user_id, username: username }, process.env.KEY);
        res.cookie('token', token, {httpOnly: true, secure: true});
        return next();
    },

    verifyCookie: async (req, res, next) => {
        console.log('authController.verifyCookie');
        if (!req.cookies.token) res.redirect('/login');
        const { token } = req.cookies; 
        jwt.verify(token, process.env.KEY, (err, decoded) => {
            console.log(decoded);
            next(); 
        })
    }, 
    
    clearCookie: async function(req, res, next) {
        res.clearCookie('token', { path: '/', httpOnly: true, secure: true });
        return next();
    },
}

module.exports = authenticationController;