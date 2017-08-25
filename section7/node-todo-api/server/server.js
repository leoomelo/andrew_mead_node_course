var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {User} = require('./models/user');
var {Todo} = require('./models/todo');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var newTodo = new Todo({
      text: req.body.text,
      completed: true,
      completedAt: 4
    });

    newTodo.save().then( (doc) => {
      res.send(doc);
    }, (e) => {
      res.send(e);
    });


});

app.listen(3000, () => {
  console.log('listening on port 3000');
});
