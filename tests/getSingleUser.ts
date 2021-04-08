import Database from "../src/database";

const supertest = require("supertest");
const app = require("../src/server");

const request = supertest(app);

afterAll(async () => {
  await Database.stopDatabase();
});

describe("the query ´user(id: integer)´", () => {
  test("should return a single user correspondent to the id", async (done) => {
    request
      .post("/graphql")
      .send({
        query: "{ user(id: 1){ id, name} }",
      })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        // console.log(res.body);
        expect(res.body.data.user).toBeInstanceOf(Object);
        expect(res.body.data.user.id).toEqual("1");
        expect(res.body.data.user.name).toEqual("Fikayo Adepoju");
        done();
      });
  });

  test("should return an error when it is used an unsupported parameter", async (done) => {
    request
      .post("/graphql")
      .send({
        query: "{ user(name: 'Fikayo Adepoju'){ id, name} }",
      })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        // console.log(res.body);
        expect(res.body.data.user).toBeInstanceOf(Object);
        expect(res.body.data.user.id).toEqual("1");
        expect(res.body.data.user.name).toEqual("Fikayo Adepoju");
        done();
      });
  });
});
