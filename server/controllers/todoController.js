const Todo = require('../models/todoModel');
const User = require('../models/userModel');
const todoController = {};

const createErr = (errInfo) => {
  const { method, type, err } = errInfo;
  return { 
    log: `todoController.${method} ${type}: ERROR: ${typeof err === 'object' ? JSON.stringify(err) : err}`,
    message: { err: `${type} error occurred in todoController.${method}. ERROR: Check server logs for more details.` }
  };
};

// Adds new todo to user's todos array. Expects an object with todoName as string, todoStatus as string, and user as an object with an id property. 
todoController.addTodo = async (req, res, next) => {
  console.log('=> todoController.addTodo'); 

  try {
    // Destruct todo object in response body
    const { todo } = req.body; 

    // If no todo object, send 400 status 
    if (!todo) return res.sendStatus(400); 
    // Find User in database
    const foundUser = await User.findById(todo.user); 
    
    // If for any reason user not found
    if (!foundUser) return res.sendStatus(400);

    // Create new Todo document
    const newTodo = await Todo.create(todo); 
    
    // Push created Todo document into User's todos array
    foundUser.todos.push(newTodo); 

    // Save User to update User's todos array in database
    await foundUser.save(); 

    // Move to next middleware
    return next();
    
  } catch (err) {
    console.log(createErr({
      method: 'addTodo',
      type: err.message,
      err: err, 
    })); 
  }

}

// Update existing todo, get todo document from todos collection and update document. 
// Expects object with properties filter, an object with id prop of todo to be updated, and update, an object with the property of the todo being updated

/**
* {
*    "filter": {"_id": "64f7a095d56b8dc0a456b68c"},
*    "update": {
*        "todoStatus": true
*    }
* }
**/
todoController.updateTodo = async (req, res, next) => {
  console.log('=> todoController.updateTodo <='); 

  try {
    // destruct filter update from request body
    const { filter, update } = req.body; 
    // if no filter or update return 400 response 
    if (!filter || !update) return res.sendStatus(400); 
    // find todo and update todo
    const updatedTodo = await Todo.findByIdAndUpdate(filter, update, { new: true });
    // move to next middleware 
    return next();
  } catch (err) {
    return next(createErr({
      method: 'updateTodo',
      type: err.message,
      err: err, 
    }))
  }
  
  

}

// Deletes existing todo, delete todo document from todos collection and in users todos array
// Need todo id to delement document in todos collection. 
todoController.deleteTodo = async (req, res, next) => {
  console.log('=> todoController.deleteTodo <=')
  try {
    // 
    const filter = req.body; 
    if (!filter) return res.sendStatus(400); 
    await Todo.deleteOne(filter);
    return next(); 
  } catch (err) {
    return next(createErr({
      method: 'updateTodo',
      type: err.message,
      err: err, 
    }))
  }

}


module.exports = todoController; 