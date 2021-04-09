// import Database from '../src/database';

require('dotenv').config();
const request = require('supertest');

const requestContainer = request(process.env.API_BASEURL);

// afterAll(async () => {
//   await Database.stopDatabase();
// });

describe('the query ´categories´', () => {
  test('should return all the categories', async (done) => {
    requestContainer
      .post('')
      .send({
        query: '{ returnAllCategories { id, name, description } }',
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err: any, res: any) => {
        if (err) return done(err);
        // console.log(res.body);
        expect(res.body.data.returnAllCategories).toBeInstanceOf(Array);
        expect(res.body.data.returnAllCategories.length).toEqual(1);
        return done();
      });
  });
});
