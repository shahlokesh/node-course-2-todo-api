var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {user} = require('./models/user');

var app = express();
app.use(bodyParser.json());
app.post('/todos', function(req, res){
 var todo = new Todo({
   text: req.body.text
 });

 todo.save().then(function(doc){
   res.send(doc);
 }, function(err){
   res.status(400).send(err);
 });
});

app.get('/todos', function(req, res){
  Todo.find().then(function(todos){
    res.send({todos});
  },function(e){
    res.status(400).send(err);
  });
});

app.get('/todos/:id', function(req, res){
var id = req.params.id;
if(!ObjectID.isValid(id)){
 return res.status(404).send();
 }
 Todo.findById(id).then(function(doc){
   if(!doc){
     return res.status(404).send();
   }
   console.log('findById', doc);
   return res.send({doc});
 }).catch((e) => res.status(400).send());
});

app.listen(3000, function(){
  console.log('Started on port 3000');
})

module.exports = {app};
