const Todo = require('../models/todoModel.js');
const User = require('../models/userModel.js');
const jwt = require('jsonwebtoken');

const createErr = (errInfo) => {
  const { method, status, err, message } = errInfo;
  return { 
    log: `userController.${method} ${status}}`,
    message: { error: message || `Error occurred in userController.${method}. ERROR: Check server logs for more details.` },
    status: status
  };
};

const todoController = {
  addTodo: async (req, res, next) => {
    try {
      console.log('todoContoller.addTodo');
      const { itemName, itemValue, itemStatus } = req.body; 
      const { id } = await jwt.verify(req.cookies.token, process.env.KEY)
      const todo = await Todo.create({ itemName: itemName, itemValue: itemValue, itemStatus: itemStatus, user: id }) 
      if (!todo) return // error message stating failed to create todo and reason why
      res.locals.todo = todo; 
      return next(); 
      
    } catch (err) {
      return next(createErr({
        method: 'addTodo',
        message: err.message,
        err: err,
      }))
    }
  },

  updateTodo: async (req, res, next) => {
    try {
      console.log('todoController.updateTodo'); 
      const { id } = req.params; 
      const update  = req.body;
      await Todo.findByIdAndUpdate({ _id: id }, update);
      next();
      
    } catch (err) {
      console.log(err)
      next(createErr({
        method: 'updateTodo',
        message: err.message,
        err: err,
      }))
    }
  },

  deleteTodo: async (req, res, next) => {
    console.log('todoController.deleteTodo');
    const { id: ToDoIdToRemove } = req.body; 
    await Todo.findOneAndDelete({ _id: ToDoIdToRemove });
    next();
  },

}

module.exports = todoController; 