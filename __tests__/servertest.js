const request = require('supertest');

const server = 'http://localhost:3000';

describe('route integration', ()=>{
  describe('/',()=>{
    describe('GET', ()=>{
      it('responds with 200 and json content type', ()=>{
        return request(server)
        .get('/')
        .expect('Content-Type', /application\/json/)
        .expect(200)
      })
    })
  })
})
