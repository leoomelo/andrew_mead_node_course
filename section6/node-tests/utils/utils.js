module.exports.add = (a, b) => {
  return a + b;
}

module.exports.square = (a) => {
  return a * a;
}

module.exports.setName = (user, fullname) => {
	var names = fullname.split(' ');
	user.firstName = names[0];
	user.lastName = names[1];

	return user;
}
