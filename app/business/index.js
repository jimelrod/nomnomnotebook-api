/*******************************
 *    Imports...
 *******************************/
var UserService = require('./services/user-service');

/*******************************
 *    Export...
 *******************************/
module.exports = class {
    constructor(dataAccess) {
        this.userService = new UserService(dataAccess);
    }
}