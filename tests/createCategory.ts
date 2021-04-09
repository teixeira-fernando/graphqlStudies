require('dotenv').config();
const request = require('supertest');

const requestContainer = request(process.env.API_BASEURL);



describe('the mutation createCategory', () => {

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

  test('should create a new category using the parameters provided', async (done) => {
    requestContainer
      .post('')
      .send({query: mutationString})
      .end((err: any, res: any) => {
        if (err) return done(err);
        // console.log(res.body);
        expect(res.body.data.createCategory).toBeInstanceOf(Object);
        expect(res.body.data.createCategory.id).not.toBeNull();
        expect(res.body.data.createCategory.name).toEqual(name);
        return done();
      });
  });
});
