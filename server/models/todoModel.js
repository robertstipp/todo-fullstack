const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const todoSchema = new Schema({
    items: [{
        itemName: String,
        itemValue: String,
        itemStatus: Boolean
    }]
});

const Todo = mongoose.model('todo', todoSchema);

module.exports = Todo;