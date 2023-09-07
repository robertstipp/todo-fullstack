const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const SALT_WORK_FACTOR = 10; 

const userSchema = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    todos: [{
        type: Schema.Types.ObjectId,
        ref: 'todo'
    }]
});

userSchema.pre('save', async function (next) {
    console.log('<<< userSchema.pre >>>')
    // If no change to the password, do not hash password, move to next middleware
    if (!this.isModified('password')) return next(); 
    this.password = bcrypt.hashSync(this.password, SALT_WORK_FACTOR);
    return next();
})

const User = mongoose.model('user', userSchema);
module.exports = User;
