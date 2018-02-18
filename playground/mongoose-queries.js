const {ObjectID} = require('Mongodb')

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
var id = '5a880f2641b4386006408640';

   User.findById(id).then(function(doc){
     if(!doc){
       return console.log('Id not found');
     }
     console.log('findById', doc);
   }).catch((e) => console.log(e));
// var id = '5a892cc290691b4441c2dd79';
//
// if(!ObjectID.isValid(id)){
//   console.log('ID not valid');
// }
//
// Todo.find({
//   _id: id
// }).then(function(docs){
//   console.log('Todos', docs);
// });
//
// Todo.findOne({
//   _id: id
// }).then(function(doc){
//   console.log('FindOne', doc);
// });
//
// Todo.findById(id).then(function(doc){
//   if(!doc){
//     return console.log('Id not found');
//   }
//   console.log('findById', doc);
// }).catch((e) => console.log(e));
