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

        this.port = 3000;
    }

    start() {
        var app = express();

        // Set route for serving static files
        app.use('/', express.static(path.join(__dirname, 'static')));

        // Add authentication middleware
        app.use(authenticate);

        // Easy parsing of message body in http requests
        // Only accept application/json
        app.use(bodyParser.json());

        // Assign API Routes...
        // See implementation for the magic...
        aggregateRoutes().forEach(route => app.use(route.endpoint, route.router));

        app.listen(this.port, () => {
            console.log(`Api started on port ${this.port}`);
        });
    }
};