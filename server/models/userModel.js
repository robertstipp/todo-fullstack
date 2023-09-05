const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const SALT_WORK_FACTOR = 10;

// we will be updating and deleting by id
const userSchema = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    todos: [{
        type: Schema.Types.ObjectId,
        ref: 'todo'
    }]
});


userSchema.pre('save', async function(next) {
    this.password = bcrypt.hashSync(this.password, SALT_WORK_FACTOR);
    return next();
})

const User = mongoose.model('user', userSchema);
module.exports = User;
