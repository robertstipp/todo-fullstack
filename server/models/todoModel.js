/*
// const mongoose = require('mongoose');
// const User = require('./userModel');

// const Schema = mongoose.Schema;

// const todoSchema = new Schema({
//     items: [{
//         itemName: String,
//         itemValue: String,
//         itemStatus: Boolean
//     }]
// });

// const todoSchema = new Schema({
//     itemName: { type: String, required: true },
//     itemValue: { type: String },
//     itemStatus: { type: Boolean, required: true },
//     user: {
//         type: Schema.Types.ObjectId,
//         ref: 'user',
//         required: true,
//     },
// }); 

// todoSchema.post('save', async function (doc) {
//     console.log('todoSchema.post-save')
//     if (this.isNew) {
//         const user = await User.findById({ _id: this.user });
//         user.todos.push(this);
//         user.save();
//     }
// })

// todoSchema.post('findOneAndDelete', async function (doc) {
//     console.log('todoSchema.post-findOneAndDelete');
//     const user = await User.findById({ _id: doc.user }); 
//     user.todos.pull(doc._id); 
//     user.save();
// }); 

// const Todo = mongoose.model('todo', todoSchema);
// module.exports = Todo;
*/