/*******************************
 *    Imports...
 *******************************/
var Server = require('./app/rest-api-server');

/*******************************
 *    The Meat?
 *******************************/
try {
    let server = new Server();
    server.start();
}
catch(e) {
    console.log(e);
}