const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const {ObjectID} = require('mongodb');

var id = '58835d66a8fabc65b5209fe1';
if(!ObjectID.isValid(id)) console.log('ID not valid!');
//mongoose, compared to native mongo driver, 
//converts id automaticaly to Object IDs
Todo.find({
    _id: id
}).then((todos) => {
    if(!todos) { 
        return console.log('ID not found');
    }
    console.log('Todos', todos);
}).catch((e) => {
    console.log(e);
});
//other find methods
//findOne - returns THE object, not an array
//findById - e.g. - TodoFindById(id)
var id1 = '5880ac9fea8e63325f555e8r';
User.find({
    _id: id1
}).then((user) => {
    if (!user) return console.log('User not found!');
    console.log('User', user);
}).catch((e) => console.log(e));