module.exports = class {
    constructor(body, message) {
        this.body = body;
        
        this.message = message || "Success";
    }
}