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

const createUpdate = (reqBody) => {
  console.log('createUpdate');
  const update = { $set: {} };

  for (let prop in reqBody) {
    update.$set[`todos.$.${prop}`] = reqBody[prop]
  };

  return update; 
}

const todoController = {

  addTodo: async (req, res, next) => {
    try {
      const { itemName, itemValue, itemStatus } = req.body;
      const { id } = await jwt.verify(req.cookies.token, process.env.KEY)
      const user = await User.findById({ _id: id }); 
      user.todos.push({ itemName: itemName, itemValue: itemValue, itemStatus: itemStatus })
      res.locals.todo = user.todos[user.todos.length-1];
      user.save(); 
      return next(); 
      
    } catch (err) {
      return next(createErr({
        method: 'addTodo',
        message: err.status,
        err: err
      }));
    }; 
  },

  updateTodo: async (req, res, next) => {
    try {
      console.log('todoController.updateTodo');
      const { id: userId } = await jwt.verify(req.cookies.token, process.env.KEY)
      const filter = { _id: userId, 'todos._id': req.params.id }
      const update = createUpdate(req.body); 
      await User.findOneAndUpdate(filter, update);
      next(); 
      
    } catch (err) {
      next(createErr({
        method: 'updateTodo',
        message: err.status,
        err: err,
      }))
    }
  },

  deleteTodo: async (req, res, next) => {
    try {
      console.log('todoController.deleteTodo');
      const todoId = req.params.id;
      const { id } = await jwt.verify(req.cookies.token, process.env.KEY)
      const user = await User.findById({ _id: id });
      await user.todos.pull(todoId);
      user.save();
      return next();
      
    } catch (error) {
      return next(createErr({
        method: 'deleteTodo',
        message: err.status,
        err: err,
      }))
    }
  },

}

module.exports = todoController; 