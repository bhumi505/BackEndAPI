const request = require('supertest');
const { expect } = require('chai');
const app = require('../app.js');

describe("Flickr API Routes", () => {
  describe("GET /flickr/publicFeed", () => {
    it("Should return a list of public feeds", (done) => {
      request(app).get("/flickr/publicFeed")
        .expect(200)
        .end((err, res) => {
          expect(res.body.data.items).to.be.an('array');
          done(err);
        });
    })
  });
});