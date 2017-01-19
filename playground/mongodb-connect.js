 const MongoClient = require('mongodb').MongoClient;
 MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
     if(err) return console.log('Unable to connect to MongoDB server');
     console.log('Connected to MongoDB server');

    //  db.collection('Todos').insertOne({
    //      text: 'Something to do',
    //      completed: false
    //  }, (err, res) => {
    //      if (err) return console.log('Unable to insert todo', err);
    //      console.log(JSON.stringify(res.ops, undefined, 2))
    //  });

    db.collection('Users').insertOne({
        name: 'Sergiu',
        age:31,
        location: 'London'
    }, (err, res) => {
        if (err) return console.log('Unable to insert user');
        console.log('user data inserted')
    });

     db.close();
 });