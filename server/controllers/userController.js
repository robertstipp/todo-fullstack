const User = require('../models/userModel.js');
const bcrypt = require('bcrypt');
const userController = {};

const createErr = (errInfo) => {
    const { method, status, err, message } = errInfo;
    return { 
      log: `userController.${method} ${status}}`,
      message: { error: message || `Error occurred in userController.${method}. ERROR: Check server logs for more details.` },
      status: status
    };
  };

userController.getUser = async (req, res, next) => {
  console.log('<<< userController.getUser >>>');
  const { username } = req.body;

  User.findOne({ username: username })
    .then(data => {
    const resultUser = {
      user_id: data.id,
      todos: data.todos
    };
    res.locals.user = resultUser; 
    return next(); 
    })
    .catch(err => {
        return next(createErr({err: err, method: 'getUser', message: {error: 'Error occurred in getUser'}}));
    });
}

// creates new user document in User collection
userController.createUser = async (req, res, next) => {
  console.log('<<< userController.createUser >>>')
  // Destruct and create user object
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).send('Missing username and/or password'); 

  User.create({username: username, password: password})
    .then((user) => {
      res.locals.user = { user_id: user._id, todos: user.todos }
      return next();
    })
    .catch(err => {
      if(err.code === 11000) next(createErr({err: err, method: 'createUser', message: {error: 'That user already exists'}, status: 409}));
      return next(createErr({err: err, method: 'createUser', message: err.message || 'Error occurred in createUser'}));
    });

}

// verifies username and password by finding user and comparing passed password aganist hashed password 
userController.verifyUser = async (req, res, next) => {
  try {
  console.log('<<< userController.verifyUser >>>')
  // destruct username and password from req body object
  const { username, password } = req.body; 

  // if no username or password redirect to signup
  if (!username || !password) {
    return res.redirect('/signup'); 
  }
  // check database for user with passed in username 
    const user = await User.findOne({ username: username });
    if (!user) {
      return res.status(404).json({error: `couldn't find user with username ${username}`});
    }
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      console.log('not valid')
      return res.redirect('/signup');
    }
    res.locals.user = { user_id: user._id, username: user.username}; 
    return next(); 
  } catch(err) {
    return next(createErr({err: err, method: 'verifyUser', message: err.message || 'Error occurred in verifyUser: Couldn\'t find user.'}));
  }
}

module.exports = userController;

