const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err) {
		console.log('Unable to connect to Mongodb Server');
	}

	console.log('Connected to Mongodb Server');

	//FIND ALL
	db.collection('Todos').find().toArray().then((docs) => {
		console.log(' <<<<<<<<<<< Find All >>>>>>>>>>>');
		console.log('Todos');
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err) => {
		console.log('Não foi possível encontrar os documentos');
	});

	//FIND BY ATTRIBUTE
	db.collection('Todos').find({completed: false}).toArray().then((docs) => {
		console.log(' <<<<<<<<<<< Find by attribute >>>>>>>>>>>')
		console.log('Todos');
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err) => {
		console.log('Não foi possível encontrar os documentos');
	});

	//FIND BY OBJECTID
	db.collection('Todos').find({_id: new ObjectID('599b85ced91b1b04bcac8db5')}).toArray().then((docs) => {		console.log(' <<<<<<<<<<< Find by ObjectID >>>>>>>>>>>')
		console.log('Todos');
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err) => {
		console.log('Não foi possível encontrar os documentos');
	})
		

	db.close();
})