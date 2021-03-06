const _ = require('lodash');

var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {user} = require('./models/user');

var app = express();

const port = process.env.PORT || 3000;
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

app.delete('/todos/:id', function(req, res){
  var id = req.params.id;
  if(!ObjectID.isValid(id)){
   return res.status(404).send();
   }
   Todo.findByIdAndRemove(id).then(function(doc){
     if(!doc){
       return res.status(404).send();
     }
     console.log('RemoveById', doc);
     return res.send({doc});
   }).catch((e) => res.status(400).send());
});

app.patch('/todos/:id',function(req, res){
  var id = req.params.id;
  var body =  _.pick(req.body, ['text', 'completed']);
  if(!ObjectID.isValid(id)){
   return res.status(404).send();
   }
   if(_.isBoolean(body.completed) && body.completed){
     body.completedAt = new Date().getTime();
   }else{
     body.completed = false;
     body.completedAt = null;
   }

   Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then(function(todo){
     if(!todo){
       return res.status(404).send();
     }
     res.send({todo});
   }).catch((e)=> {
 res.status(400).send();
})
});

app.listen(port, function(){
  console.log(`Started on port ${port}`);
})

module.exports = {app};
