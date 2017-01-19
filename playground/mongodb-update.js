//  const MongoClient = require('mongodb').MongoClient;
 const {MongoClient, ObjectID} = require('mongodb');
 MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
     if(err) return console.log('Unable to connect to MongoDB server');
     console.log('Connected to MongoDB server');

     db.collection('Users').findOneAndUpdate({
         _id: new ObjectID("587fcf39900848c6fb7c0c3f")
     }, {
         $set: {
             name: 'Liusea'
         },
         $inc: {
             age: 1
         },
     }, {
         returnOriginal: false
     }).then((res) => {
         console.log(res);
     })

    //  db.close();
 });
