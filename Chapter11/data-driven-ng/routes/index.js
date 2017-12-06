// routes/index.js
const express = require('express');
const router = express.Router();
const path = require('path');
const appDir = path.dirname(require.main.filename);

// require diskdb
const db = require('diskdb');
db.connect(appDir, ['todos']);

// store Todo
router.post('/todo', function(req, res, next) {
 var todo = req.body;
 if (!todo.action || !(todo.isDone + '')) {
   res.status(400);
   res.json({
     error: 'bad data'
   });
 } else {
   db.todos.save(todo);
   res.json(todo);
 }
});

// get Todos
router.get('/todos', function(req, res, next) {
 const todos = db.todos.find();
 res.json(todos);
});

// update Todo
router.put('/todo/:id', function(req, res, next) {
 const todo = req.body;
 db.todos.update({_id: req.params.id}, todo);
 res.json({ msg: `${req.params.id} updated`});
});

// delete Todo
router.delete('/todo/:id', function(req, res, next) {
 db.todos.remove({
   _id: req.params.id
 });
 res.json({ msg: `${req.params.id} deleted` });
});

module.exports = router;