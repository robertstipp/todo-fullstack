const express = require('express');
const userController = require('../controllers/userController.js');
const todoController = require('../controllers/todoController.js'); 

const Router = express.Router();

Router
    .route('/login')
    .post(userController.verifyUser, userController.getUser, (req, res) => {
       return res.status(200).send(res.locals.user);
    });

Router
    .route('/signup')
    .post(userController.createUser, (req, res) => {
        return res.status(200).json(res.locals.user);
    });

// endpoint
module.exports = Router;