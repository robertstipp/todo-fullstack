const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const todoSchema = new Schema({
    items: [{
        itemName: String,
        itemValue: String
    }],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    }
});