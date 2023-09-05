const Todo = require('../models/todoModel');
const User = require('../models/userModel');
const todoController = {};

const createErr = (errInfo) => {
  const { method, type, err } = errInfo;
  return { 
    log: `userController.${method} ${type}: ERROR: ${typeof err === 'object' ? JSON.stringify(err) : err}`,
    message: { err: `Error occurred in userController.${method}. ERROR: Check server logs for more details.` }
  };
};

todoController.getTodos = (req, res, next) => {

}