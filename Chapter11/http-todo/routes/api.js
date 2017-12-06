const express = require('express');
const router = express.Router();

var db = require('diskdb');
db.connect(__dirname, ['todos']);

//save
router.post('/todo', function(req, res, next) {
  var todo = req.body;
  if (!todo.action || !(todo.isDone + '')) {
    res.status(400);
    res.json({
      error: 'bad data'
    });
  } else {
    console.log('ds');
    db.todos.save(todo); // Doesn't take a callback
    res.json(todo);
  }
});

//get
router.get('/todos', function(req, res, next) {
  var foundTodos = db.todos.find();
  console.log(foundTodos);
  res.json(foundTodos);
  foundTodos = db.todos.find();
  console.log(foundTodos);
});

//update
router.put('/todo/:id', function(req, res, next) {
  var updTodo = req.body;
  
	console.log(updTodo, req.params.id)
  db.todos.update({_id: req.params.id}, updTodo);
  res.json({ msg: req.params.id + ' updated' });
});

//delete
router.delete('/todo/:id', function(req, res, next) {
  console.log(req.params);
  db.todos.remove({
    _id: req.params.id
  });
  res.json({ msg: req.params.id + ' deleted' });
});

module.exports = router;
