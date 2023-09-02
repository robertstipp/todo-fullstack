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
    const { username, password } = req.body;
    User.findOne({username: username, password: password})
        .then(data => {
            res.locals.user = {username: 'marco', password: 'password'};
            return next();
        })
        .catch(err => {
            return next(createErr({err: err, method: 'getUser', type: err.message ? err.message : 'Error occurred in getUser'}));
        });
}

module.exports = userController;