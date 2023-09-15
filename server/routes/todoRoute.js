const express = require('express'); 
const todoController = require('../controllers/todoController');
const authenticationController = require('../controllers/authenicationController'); 

const Router = express.Router();

Router
  .route('/')
  .get(todoController.getTodos); 
/* (req, res) => {
    res.status(200).json(res.locals.todos)
  }
*/
Router
  .route('/')
  .post(authenticationController.verifyCookie, todoController.addTodo, (req, res) => {
    res.status(200).json(res.locals.todo);
  }); 

Router
  .route('/:id')
  .patch(authenticationController.verifyCookie, todoController.updateTodo, (req, res) => {
    res.sendStatus(200); 
}); 

Router
  .route('/:id')
  .delete(authenticationController.verifyCookie, todoController.deleteTodo, (req, res) => {
    res.sendStatus(200);
})

module.exports = Router; 