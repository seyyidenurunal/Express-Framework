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
            done();
        });
    });
});