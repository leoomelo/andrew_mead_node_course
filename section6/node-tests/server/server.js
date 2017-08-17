const express = require('express');

var app = express();

app.get('/', (req, res) => {
	res.status(200).json({name: "Leonardo"});
});

app.get('/users', (req, res) => {
	res.status(200).json([
		{
			name: "Leonardo Melo",
			age: 25
		},
		{
			name: "Felipe Melo",
			age: 2
		}
	]);
});

app.listen(3000);

module.exports.app = app;
