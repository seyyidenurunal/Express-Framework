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

    describe('/POST movie', () => {
        it('It should Post a movie.', (done) => {
            const movie = {
                title : 'Leyla İle Mecnun',
                director_id : '62740c715796fa8cddf8ac7a',
                category : 'Komedi',
                country : 'Türkiye',
                year : '2009',
                imdb : '9.5'
            }

            chai.request(server)
                .post('/api/movie')
                .send(movie)
                .set('x-access-token', token)
                .end((err,res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('title');
                    res.body.should.have.property('director_id');
                    res.body.should.have.property('category');
                    res.body.should.have.property('country');
                    res.body.should.have.property('year');
                    res.body.should.have.property('imdb');
                    done();
                });
        });
    });
});