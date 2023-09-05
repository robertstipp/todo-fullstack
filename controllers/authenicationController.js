const bcrypt = require('bcrypt');

// cookie stuff in here

// maybe store cookie with JWT inside?

// if no session exists then cookie is invalid


// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// /**
// * Check out the `createdAt` field below. This is set up to use Mongo's automatic document
// * expiration service by giving the Mongoose schema the `expires` property.
// * After 30 seconds, the session will automatically be removed from the collection!
// * (actually, Mongo's cleanup service only runs once per minute so the session
// * could last up to 90 seconds before it's deleted, but still pretty cool!)
// */
// const sessionSchema = new Schema({
//   cookieId: { type: String, required: true, unique: true },
//   createdAt: { type: Date, expires: 30, default: Date.now }
// });

// module.exports = mongoose.model('Session', sessionSchema);

// EXAMPLE

// const Session = require('../models/sessionModel');
// const User = require('../models/userModel')
// const { Console } = require('node:console'); 

// const sessionController = {};

// /**
// * isLoggedIn - find the appropriate session for this request in the database, then
// * verify whether or not the session is still valid.
// */
// sessionController.isLoggedIn = (req, res, next) => {
//     // write code here
//     /*
//      Modify the `sessionController.isLoggedIn`
//      middleware to verify if a user has a cookie with the name "ssid" and it has an active session.
//     */
//     if(req.cookies.ssid) {
//       return next();
//     }
//     return res.redirect('/signup');
//   };
  
//   /**
//   * startSession - create and save a new Session into the database.
//   */
//   sessionController.startSession = async (req, res, next) => {
//     const { username } = req.body;
//     const user = await User.findOne({ username: username });
  
//     const userSession = {
//       cookieId: user._id,
//       createdAt: Date.now()
//     }
  
//     const session = await Session.findOne({cookieId: user._id});
//     if (session) return next();
  
//     Session.create(userSession);
//     return next();
//   };
  
//   module.exports = sessionController;
