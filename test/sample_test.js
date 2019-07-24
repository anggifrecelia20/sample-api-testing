//author: anggifrecelia

let chai = require('chai');
let expect = require('chai').expect;
let chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('/GET Testing', () => {

  it('it should success to retrive all data', (done) => {
    chai.request('localhost:3000') // chai meminta base URL dan port 
        .get('/sample') // 'get'  adalah REST method dan '/sample' adalah endpoint API yang di test 
        .end((err, res) => {
          // kita melakukan response assertion 
          expect(res).to.have.status(200);
          
        });
     done();
  });

  it('it should success to retrive Hello, World!', (done) => {
    chai.request('localhost:3000') // chai meminta base URL dan port 
        .get('/hello') // 'get'  adalah REST method dan '/hello' adalah endpoint API yang di test 
        .end((err, res) => {
          // kita melakukan response assertion 
          expect(res).to.have.status(200);
          
        });
     done();
  });

  it('it should be returns a dynamic string according to the parameters sent', (done) => {
    chai.request('localhost:3000')
        .get('/hello_name')
        .end((err, res) => {

          expect(res).to.have.status(200);
        
        });
     done();
  });

});

describe('/POST Testing', () => {

  it('it should success to retrive all data', (done) => {
	chai.request('localhost:3000')
		.post('/test')
		.send('Post Request Value is  x')
		.end((err, res) => {

			expect(res).to.have.status(200);

		});
	 done();

  });

  it('it should be return invalid request', (done) => {
  chai.request('localhost:3000')
  .post('/test123')
  .send('Invalid Request')
  .end((err, res) => {

     expect(res).to.have.status(404);

  });
  done();
  });
});