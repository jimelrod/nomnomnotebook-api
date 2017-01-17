var DbSet = require('./db-set');

module.exports = class {
    constructor(connection) {
        this.connection = connection;
    }

    create(model) {
        return new DbSet(model, this.connection);
    }
}