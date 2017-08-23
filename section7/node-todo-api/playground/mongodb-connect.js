const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj); 

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err) {
		console.log('Unable to connect to Mongodb Server');
	}

	console.log('Connected to Mongodb Server');


	// db.collection('Todos').insertOne({
	// 	text: 'Something to do',
	// 	completed: false
	// }, (err, result) => {
	// 	if (err) {
	// 		return console.log('Unable to insert todo: ' + err);
	// 	}

	// 	console.log(JSON.stringify(result.ops, undefined, 2));

	// });

	// db.collection('Users').insertOne({
	// 	name: 'Leonardo Melo',
	// 	age: 25,
	// 	location: 'Recife'
	// }, (err, result) => {
	// 	if (err) {
	// 		return console.log('Unable to insert Users');
	// 	}

	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// });

	db.close();
})