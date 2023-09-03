const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    todo: {
        type: Schema.Types.ObjectId,
        ref: 'todo'
    }
});

const User = mongoose.model('user', userSchema);

module.exports = User;