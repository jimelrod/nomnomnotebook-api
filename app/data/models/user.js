module.exports = class User {
    constructor() {
        this.id = 1;
        this.displayName = "Jim";
        this.isActive = false;
        this.photoUrl;
    }

    get id() {
        return this.id;
    }

    set id(id) {
        this.id = id;
    }

    get displayName() {
        return this.displayName;
    }

    set displayName(displayName) {
        this.displayName = displayName;
    }
}