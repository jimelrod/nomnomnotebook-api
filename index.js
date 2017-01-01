/*******************************
 *    Imports...
 *******************************/
const path = require('path');
const Server = require(path.join(__dirname, 'app', 'rest-api-server')); // Maybe shouldn't be const? I dunno...

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