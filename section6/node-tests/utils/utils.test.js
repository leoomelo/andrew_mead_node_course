const expect = require('expect');
const utils = require('./utils');

it('should add two numbers', () => {
  var res = utils.add(33, 11);

  expect(res).toBe(44).toBeA('number');
});

it('should square a number', () => {
  var res = utils.square(9);

  expect(res).toBe(81).toBeA('number');
})

it('should set firstName and lastName', () => {
	var user = {location: "Recife", age: "31"}
	var res = utils.setName(user, "Leonardo Melo");

	expect(res).toInclude({firstName: "Leonardo", lastName: "Melo"});
})
