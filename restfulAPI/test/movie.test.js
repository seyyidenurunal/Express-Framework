const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should(); 

const server = require('../app');

chai.use(chaiHttp);

let token;

describe('/api/movie test', () => { 
   before((done) => {
   
        chai.request(server)
            .post('/authenticate')
            .send({username: 'macviss', password: '123456'})
            .end((err,res) => {
                token = res.body.token;
                console.log(token);
                done();
            });
   });


    describe('GET movie', () => {
        it('it should GET all the movies', (done) => {
            chai.request(server)
                .get('/api/movie')
                .set('x-access-token', token)
                .end((err,res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
                });
        });
    });
});