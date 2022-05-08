const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should(); 

const server = require('../app');

chai.use(chaiHttp);

describe('Node Server', () => { //Unit testi bunun içerisinde yazıyoruz.
    it('(GET /), ANASAYFAYI DÖNDÜRÜR', (done) => {
        //done(); her şey yolunda test tamam demek oluyor.
        chai.request(server)
            .get('/')
            .end((err,res) => {
                res.should.have.status(200);
                done();
            })
    });
});