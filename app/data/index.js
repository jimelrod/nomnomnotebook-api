var Connection = require('tedious').Connection;
var User = require('./models/user');
var DbSetFactory = require('./db-set-factory');

module.exports = class {
    constructor(config) {
        let dbSetFactory = new DbSetFactory(new Connection(config));

        this.users = dbSetFactory.create(User);
    }
};