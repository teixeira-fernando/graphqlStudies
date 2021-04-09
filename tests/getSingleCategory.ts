require('dotenv').config();
const request = require('supertest');

const requestContainer = request(process.env.API_BASEURL);

describe('the query returnSingleCategory(id: string)´', () => {
  test('should return a single category correspondent to the id', async (done) => {
    requestContainer
      .post('')
      .send({
        query:
          '{ returnSingleCategory(id: "606f683ddd4c434b71e5aea0"){ id, name, description} }',
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        // console.log(res.body);
        expect(res.body.data.returnSingleCategory).toBeInstanceOf(Object);
        expect(res.body.data.returnSingleCategory.id).toEqual(
          '606f683ddd4c434b71e5aea0'
        );
        expect(res.body.data.returnSingleCategory.name).toEqual('Electronics');
        return done();
      });
  });

  test('should return an error when it is used an unsupported parameter', async (done) => {
    requestContainer
      .post('')
      .send({
        query:
          '{ returnSingleCategory(name: "Electronics"){ id, name, description} }',
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400)
      .end((err, res) => {
        if (err) return done(err);
        // console.log(res.body);
        expect(res.body.errors).toBeInstanceOf(Object);
        expect(res.body.errors.length).toEqual(2);
        return done();
      });
  });
});
