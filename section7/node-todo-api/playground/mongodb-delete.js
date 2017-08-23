const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err) {
		console.log('Unable to connect to Mongodb Server');
	}

	console.log('Connected to Mongodb Server');

	//DELETE MANY
	// db.collection('Users').deleteMany({name: 'Leonardo Melo'}).then( (result) => {
	// 	console.log(result);
	// });


	//DELETE ONE
	// db.collection('Users').deleteOne({name: 'Leonardo Melo'}).then( (result) => {
	// 	console.log(result);
	// });

	db.collection('Users').findOneAndDelete({name: 'Leonardo Melo'}).then( (result) => {
		console.log(result);
	});

	db.close();
})