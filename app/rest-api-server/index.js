/*******************************
 *    Imports...
 *******************************/
var express = require('express');
var aggregateRoutes = require('./route-aggregator');
var auth = require('./auth');

/*******************************
 *    The Meat?
 *******************************/
module.exports = class {
    constructor(config) {
        // TODO: Figure out config...
        console.log("Server module built...");
    }

    start() {
        var app = express();

        // Add authentication middleware
        app.use(auth);

        // Assign Routes...
        aggregateRoutes().forEach(route => {
            app.use(route.endpoint, route.router);
        });

        app.get('/', (req, res) => {
            res.send('Hello World!');
        });

        app.listen(3000, () => {
            console.log('Example app listening on port 3000!');
        });
    }
};