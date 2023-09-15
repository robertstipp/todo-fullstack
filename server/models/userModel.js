const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const SALT_WORK_FACTOR = 10;

const todoSchema = new Schema({
    itemName: { type: String, required: true },
    itemValue: { type: String },
    itemStatus: { type: Boolean, required: true },
}, {timestamps: true})

// we will be updating and deleting by id
const userSchema = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    todos: [todoSchema]
});


userSchema.pre('save', async function (next) {
    console.log('userSchema.pre')
    if (this.isModified('password')) {
        this.password = await bcrypt.hashSync(this.password, SALT_WORK_FACTOR);
    }
    return next();
})



const User = mongoose.model('user', userSchema);
module.exports = User;
