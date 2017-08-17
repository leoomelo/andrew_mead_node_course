module.exports.add = (a, b) => {
  return a + b;
}

module.exports.asyncAdd = (a, b, callback) => {
    setTimeout( () => {
    	callback(a + b);
    }, 1000);
}

module.exports.square = (a) => {
  return a * a;
}

module.exports.asyncSquare = (x, callback) => {
	setTimeout( () => {
		callback(x * x);
	}, 1000);
}

module.exports.setName = (user, fullname) => {
	var names = fullname.split(' ');
	user.firstName = names[0];
	user.lastName = names[1];

	return user;
}
