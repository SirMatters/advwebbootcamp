var express = require("express");
var router = express.Router();
var db = require('../models'); //index file is required by default
var helpers = require("../helpers/todos")

router.route('/')
  .get(helpers.getTodos)
  .post(helpers.getTodos)

router.route('/:todoId')
  .get(helpers.getTodo())
  .put(helpers.updateTodo())
  .delete(helpers.deleteTodo())

module.exports = router;