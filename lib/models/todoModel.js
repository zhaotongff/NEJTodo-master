/**
 
 */

const mongoose = require('mongoose');

const TodoSchema = require('../schemas/todoSchema');
const Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;