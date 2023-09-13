const Todo = require('../models/todoModel.js');

const todoController = {}; 

const createErr = (errInfo) => {
  const { method, status, err, message } = errInfo;
  return { 
    log: `userController.${method} ${status}}`,
    message: { error: message || `Error occurred in userController.${method}. ERROR: Check server logs for more details.` },
    status: status
  };
};

todoController.addTodo = (req, res, next) => {

}; 

todoController.deleteTodo = (req, res, m)