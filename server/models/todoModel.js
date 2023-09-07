const mongoose = require('mongoose');

const Schema = mongoose.Schema;
/*
const todoSchema = new Schema({
    items: [{
        itemName: String,
        itemValue: String,
        itemStatus: Boolean
    }]
});
*/

const todoSchema = new Schema({
    todoName: { type: String, required: true }, 
    todoStatus: {type: Boolean, required: true }, 
    user: {
        type: Schema.Types.ObjectId,
        ref: 'todo',
        required: true, 
    }, 
}, { timestamps: true});


const Todo = mongoose.model('todo', todoSchema);

module.exports = Todo;