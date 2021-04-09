require('dotenv').config();
const request = require('supertest');

const requestContainer = request(process.env.API_BASEURL);



describe('the mutation createCategory', () => {

  test('should create a new category using the parameters provided', async (done) => {

    const name = "House decoration"
    const description = "Any kind of house decoration items"

    const mutationString = `
    mutation{
        createCategory(data: {
          name: "${name}"
          description: "${description}"
        }){
          id
          name
          description
        }
      }    
    `;

    requestContainer
      .post('')
      .send({query: mutationString})
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err: any, res: any) => {
        expect(err).toBeNull();
        // console.log(res.body);
        expect(res.body.data.createCategory).toBeInstanceOf(Object);
        expect(res.body.data.createCategory.id).not.toBeNull();
        expect(res.body.data.createCategory.name).toEqual(name);
        return done();
      });
  });

  test('should fail if it is not provided any mandatory parameter', async (done) => {
    const description = "Description of a category without name"

    const mutationStringMissingName = `
    mutation{
        createCategory(data: {
          description: "${description}"
        }){
          id
          name
          description
        }
      }    
    `;

    requestContainer
      .post('')
      .send({query: mutationStringMissingName})
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400)
      .end((err: any, res: any) => {
        if (err) return done(err);
         console.log(res.body);
        expect(res.body.errors).toBeInstanceOf(Object);
        expect(res.body.data).toBeUndefined();
        return done();
      });
    });
});
