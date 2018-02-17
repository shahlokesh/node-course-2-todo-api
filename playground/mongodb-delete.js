//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://LokeshMongoDb:Charusha619!@ds239648.mlab.com:39648/ls_mongodb_for_study', function(err, db){
  if(err){
  return  console.log('Unable to connect to MongoDb server');
  }
    console.log('Connected to Mongodb server');
//delete many
// db.collection('ls_mongodb_for_study').deleteMany({text: 'Eat Lunch'})
// .then(function (result){
//   console.log(result);
// });

//delete one
// db.collection('ls_mongodb_for_study').deleteOne({age: 26})
//  .then(function (result){
//    console.log(result);
// });
//findOneandDelete
// db.collection('ls_mongodb_for_study').findOneAndDelete({age: 26})
//  .then(function (result){
//    console.log(result);
// });
//db.close();
});
