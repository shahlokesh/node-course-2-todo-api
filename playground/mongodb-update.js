//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://LokeshMongoDb:Charusha619!@ds239648.mlab.com:39648/ls_mongodb_for_study', function(err, db){
  if(err){
  return  console.log('Unable to connect to MongoDb server');
  }
    console.log('Connected to Mongodb server');

db.collection('ls_mongodb_for_study').findOneAndUpdate({
  _id: new ObjectID('5a87feadea03e41a2c65c74d')
}, {
  $inc: {
    age: 1
  }
}, {
  returnOriginal: false
}).then(function(result){
  console.log(result);
});
});
