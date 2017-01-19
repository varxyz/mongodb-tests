
//  const MongoClient = require('mongodb').MongoClient;
 const {MongoClient, ObjectID} = require('mongodb');
 MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
     if(err) return console.log('Unable to connect to MongoDB server');
     console.log('Connected to MongoDB server');

     db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((res) => {
         console.log(res);
     });
    //  //findOneAndDelete gets the document in the console and deletes it
    //  db.collection('Todos').findOneAndDelete({completed: false}).then((res) => {
    //      console.log(res);
    //  });
    //  //deleteOne deletes the first instance of the found entries
    //  db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((res) => {
    //      console.log(res);
    //  });

    //  db.close();
 });