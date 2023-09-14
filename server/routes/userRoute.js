const express = require('express');
const userController = require('../controllers/userController.js');
const authenticationController = require('../controllers/authenicationController.js');

const Router = express.Router();

Router
    .route('/login')
    .post(userController.verifyUser, userController.getUser, (req, res) => {
        return res.status(200).send(res.locals.user);
    });

Router
    .route('/signup')
    .post(userController.createUser, authenticationController.createCookie, (req, res) => {
        return res.status(200).json(res.locals.user);
    });

Router
    .route('/cookie')
    .post(authenticationController.createCookie, (req, res) => {
        return res.status(200).send('cookie set');
    });

Router
    .route('/logout')
    .post(authenticationController.clearCookie, (req, res) => {
        return res.status(200).send('Cookie Cleared')
    })

// endpoint
module.exports = Router;