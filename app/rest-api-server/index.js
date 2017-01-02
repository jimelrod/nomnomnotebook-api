/*******************************
 *    Imports...
 *******************************/
var express = require('express');
var aggregateRoutes = require('./route-aggregator');
var auth = require('./auth');
var path = require('path');

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

        // Set static route
        app.use('/', express.static(path.join(__dirname, 'static')));

        // Add authentication middleware
        app.use(auth);

        // Assign API Routes...
        aggregateRoutes().forEach(route => {
            app.use(route.endpoint, route.router);
        });        

        app.listen(3000, () => {
            console.log('Example app listening on port 3000!');
        });
    }
};