const request = require('supertest');
const expect = require('expect');
var app = require('./server').app;

describe('Server', () => {
	describe('GET /', () => {
		it('should return hello world response', (done) => {
			request(app)
			.get('/')
			.expect(200)
			.end(done);
		});
	})

	describe('GET /users', () => {
		it('should return array of users', (done) => {
			request(app)
			.get('/users')
			.expect(200)
			.expect( (res) => {
				expect(res.body[0].age).toBe(25);
				expect(res.body[0]).toInclude({name: 'Leonardo Melo'});
			})
			.end(done);
		})
	});
});

