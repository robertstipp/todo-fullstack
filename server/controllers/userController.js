const User = require('../models/userModel.js');
const userController = {};

const createErr = (errInfo) => {
    const { method, type, err } = errInfo;
    return { 
      log: `userController.${method} ${type}: ERROR: ${typeof err === 'object' ? JSON.stringify(err) : err}`,
      message: { err: `Error occurred in userController.${method}. ERROR: Check server logs for more details.` }
    };
  };

userController.getUser = async (req, res, next) => {
  console.log('Request Received')
  const { username, password } = req.body;
  User.findOne({ username: username, password: password })
    .then(data => {
      res.locals.user = data; 
      return next();
    })
    .catch(err => {
      return next(createErr({ err: err, method: 'getUser', type: err.message ? err.message : 'Error occurred in getUser' }));
    });
};

userController.createUser = async (req, res, next) => {
  const { username, password } = req.body; 
  
  User.create({ username: username, password: password }, (err, user) => {
    if (err) return next(createErr({ err: err, method: 'createUser', type: err.message ? err.message : 'Error occurred creating user in database' }));
      
    res.locals.user = user._id;
    return next();

  });

}

module.exports = userController;