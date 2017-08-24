var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

//TODO MODEL
// var Todo = mongoose.model('Todo', {
//   text: {
//     type: String
//   },
//   completed: {
//     type: Boolean
//   },
//   completedAt: {
//     type: Number
//   }
// });
//
// var newTodo = new Todo({
//   text: 'Primeiro registro com o mongoose',
//   completed: false,
//   completedAt: 34
// });
//
// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc);
// }, (e) => {
//   console.log('Não foi possível salvar em Todo');
// });

//USER MODEL
var User = mongoose.model('User', {
  email: {
    type: String,
    require: true,
    trim: true,
    minlength: 1
  }
});

var newUser = new User({
  email: 'leoomelo@hotmail.com'
});

newUser.save().then( (docs) => {
  console.log('Usuário Salvo', docs);
}, (e) => {
  console.log(e);
  console.log('Não foi possível salvar o usuário');
});
