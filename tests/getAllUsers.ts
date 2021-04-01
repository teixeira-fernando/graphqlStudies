const app = require("../src/server");
const supertest = require("supertest");
import Database from "../src/database";

const request = supertest(app);

afterAll(async () => {
  await Database.stopDatabase();
});

describe("the query ´users´", () => {
  test("should return all the users", async (done) => {
    request
      .post("/graphql")
      .send({
        query: "{ users{ id, name} }",
      })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        //console.log(res.body);
        expect(res.body.data.users).toBeInstanceOf(Array);
        expect(res.body.data.users.length).toEqual(3);
        done();
      });
  });
});
