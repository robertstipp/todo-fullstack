const express = require('express');
const todoController = require('../controllers/todoController.js'); 

const Router = express.Router();

// Post Route 
Router 
    .route('/')
    .post(todoController.addTodo, (req, res) => {
        console.log('=> Post Route <=')
        // Send 200 status code signifying todo has been added
        return res.sendStatus(200); 
    })

// Todo Patch Route
Router
    .route('/')
    .patch(todoController.updateTodo, (req, res) => {
        console.log('=> Patch Route <=')
        return res.sendStatus(200); 
    })

// Delete Route 
Router
    .route('/')
    .delete(todoController.deleteTodo, (req, res) => {
        console.log('=> Delete Route <=')
        return res.sendStatus(200); 
    })


// endpoint
module.exports = Router;