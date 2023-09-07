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

  const { todo } = req.body; 

  try {
    // Find User in database
    const foundUser = await User.findById(todo.user); 
    
    // If for any reason user not found,  // ! HOW DO WE WANT TO HANDLE THIS?
    if (!foundUser) return console.log('=> USER NOT FOUND');

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
    const { filter, update } = req.body; 
    // ! HOW DO WE WANT TO THIS?
    if (!filter || !update) return; 
    const updatedTodo = await Todo.findByIdAndUpdate(filter, update, {new: true});
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
    const filter = req.body; 
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