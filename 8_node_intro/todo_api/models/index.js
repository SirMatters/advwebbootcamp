var mongoose = require("mongoose");
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/todo-api');

mongoose.Promise = Promise; //allows to use promise syntax

module.exports.Todo = require('./todo');
