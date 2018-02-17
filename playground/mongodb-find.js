//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://LokeshMongoDb:Charusha619!@ds239648.mlab.com:39648/ls_mongodb_for_study', function(err, db){
  if(err){
  return  console.log('Unable to connect to MongoDb server');
  }
    console.log('Connected to Mongodb server');

    // db.collection('ls_mongodb_for_study').find().count().then((count) => {
    //   console.log(`Count : ${count}`);
    //   // console.log(JSON.stringify(docs, undefined, 2)
    // },(err)=>{
    //   console.log("Unable to find");
    // });

db.collection('ls_mongodb_for_study').find({
  _id: new ObjectID('5a87de5293ac5011a0465038')
}).toArray().then((docs) => {
  console.log("Users");
  console.log(JSON.stringify(docs, undefined, 2)
  );
},(err)=>{
  console.log("Unable to find");
})

//db.close();
});
