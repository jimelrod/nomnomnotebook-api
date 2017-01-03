/*******************************
 *    Imports...
 *******************************/
var express = require('express');
var aggregateRoutes = require('./route-aggregator');
var authenticate = require('./authenticate');
var path = require('path');
var bodyParser = require('body-parser');

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
        app.use(authenticate);

        // parse application/json
        app.use(bodyParser.json())

        // Assign API Routes...
        aggregateRoutes().forEach(route => {
            app.use(route.endpoint, route.router);
        });        

        app.listen(3000, () => {
            console.log('Example app listening on port 3000!');
        });
    }
};