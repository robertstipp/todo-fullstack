const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const authenticationController = {
    createCookie: async function(req, res, next) {
        const { username } = req.body;
        if(req.cookies.token) return next();
        const token = await jwt.sign(username, process.env.KEY);
        res.cookie('token', token, {httpOnly: true, secure: true});
        return next();
    },
    clearCookie: async function(req, res, next) {
        res.clearCookie('token', { path: '/', httpOnly: true, secure: true });
        return next();
    }
}

module.exports = authenticationController;