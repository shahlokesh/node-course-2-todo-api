//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

//MongoClient.connect('mongodb://localhost:27017/TodoApp', function(err, db){
//MongoClient.connect('mongodb://localhost:27017/Users', function(err, db){
MongoClient.connect('mongodb://LokeshMongoDb:Charusha619!@ds239648.mlab.com:39648/ls_mongodb_for_study', function(err, db){
  if(err){
  return  console.log('Unable to connect to MongoDb server');
  }
    console.log('Connected to Mongodb server');


    // db.collection('ls_mongodb_for_study').insertOne({
    //   name: 'Lokesh',
    //   age: 26,
    //   location: 'Pune'
    // }, function(err, result){
    //   if(err){
    //     return console.log('Unable to insert todo', err);
    //   }
    //   console.log(result.ops[0]._id.getTimestamp());
    //   console.log(JSON.stringify(result.ops, undefined, 2));
    // });

db.close();
});
