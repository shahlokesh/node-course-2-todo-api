const {ObjectID} = require('Mongodb')

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
//  Todo.remove({}).then(function(result){
//   console.log(result);
// });

Todo.findByIdAndRemove('5a89aad9734d1d041bb6ff10').then(function(todo){
console.log(todo);
})
