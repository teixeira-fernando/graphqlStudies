require('dotenv').config();
const request = require('supertest');

const requestContainer = request(process.env.API_BASEURL);

describe('the query ´categories´', () => {
  test('should return all the categories', async (done) => {
    requestContainer
      .post('')
      .send({
        query: '{ returnAllCategories { id, name, description } }',
      })
      .set('Accept', 'application/json')
      .expect(200)
      .end((err: any, res: any) => {
        expect(err).toBeNull();
        // console.log(res.body);
        expect(res.body.data.returnAllCategories).toBeInstanceOf(Array);
        expect(res.body.data.returnAllCategories.length).toBeGreaterThan(3);
        return done();
      });
  });
});
