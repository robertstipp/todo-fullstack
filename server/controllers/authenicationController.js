const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const authenticationController = {
    createCookie: function(req, res, next) {
        const { username } = req.body;
        if(req.cookies.token) return next();
        const token = jwt.sign(username, process.env.KEY);
        res.cookie('token', token, {httpOnly: true, secure: true});
        return next();
    }
}

module.exports = authenticationController;