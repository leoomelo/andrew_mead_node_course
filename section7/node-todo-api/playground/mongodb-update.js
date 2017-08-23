const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err) {
		console.log('Unable to connect to Mongodb Server');
	}

	console.log('Connected to Mongodb Server');

	db.collection('Users').findOneAndUpdate( {
		_id: new ObjectID('599de29d60ad0ce6e822cbfe')
		}, 
		{
			$set: {
				name: "Felipe Melo"
			},
			$inc: {
				age: 1
			}
		}, 
		{
			returnOriginal: false
		})
		.then( (result) => {
			console.log(result);
		});

	db.close();
})