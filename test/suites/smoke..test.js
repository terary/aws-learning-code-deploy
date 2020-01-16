
// const chai = require('chai');
const { app } = require('../../dist/server');

var chai = require('chai')
  , chaiHttp = require('chai-http');

chai.use(chaiHttp);
const expect = chai.expect;

// const server =app;
// const port = process.env.PORT || 3030;
// server.listen(port, function listenHandler() {
//   console.info(`Running on ${port}...`);
// });

describe('Server smoke test', ()=>{
    let requester;
    before(()=>{
        requester = chai.request(app).keepOpen()
    })
    it('should have get /whoami', (done) => {
        
        requester.get('/whoami')
        .then(response=>{
            console.log(`Got http response: ${response.status}` )
            expect(response.status, 'http status').to.equal(200);
            done()
        }).catch(e=>{
            done(e);
        })
    });
    after(()=>{
        requester.close();
    })
})

// Promise.all([

//   requester.get('/b'),
// ])
// .then(responses => ....)
// .then(() => requester.close())