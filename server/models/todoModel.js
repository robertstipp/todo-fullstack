const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const todoSchema = new Schema({
    items: [{

        itemName: String,
        itemValue: String,
        status: Boolean,
    }],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    }
});

{
    id, 
    itemName, 
    status, 
}

const todo = mongoose.model('todo', todoSchema); 

module.exports = Todo; 