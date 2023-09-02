const express = require('express');
const userController = require('../controllers/userController.js');

const Router = express.Router();

// Router.post('/', userController)

Router
    .route('/')
    .post(userController.getUser, (req, res) => {
        res.status(200).send(res.locals.user);
    });

module.exports = Router;