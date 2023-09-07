const request = require('supertest'); 
const app = require('../index.js'); 

describe('POST /users/login', () => {
  describe('Give an username and password', () => {
    // should save the username and password to the database
    // should respond with a json object containing the user id and todos array
    test('should respond with a json object containing the user id and todos array', async () => {
      const response = await request(app).post('/user/login').send({
        username: "bobby", 
        password: "password"
      })
      expect(response.body.user_id).toBeDefined(); 
    })
    // should respond with a 200 status code
    test('should respond with a 200 status code', async () => {
      const response = await request(app).post('/user/login').send({
        username: "bobby", 
        password: "password"
      })
      expect(response.statusCode).toBe(200); 
    })
    // should specify json in the content type header
    test('should specify json in the content type header', async () => {
      const response = await request(app).post('/user/login').send({
        username: "bobby", 
        password: "password"
      })
      expect(response.headers['content-type']).toEqual(expect.stringContaining('json')); 
    }) 
  }); 

  // describe('When the username and password is missing', async () => {
  //   // should response with a status code 400 
  // })
}); 