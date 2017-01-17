module.exports = class {
    
    constructor(dataAccess) {
        this.dataAccess = dataAccess;
    }
    
    get(id) {
        return this.dataAccess.get(id);
    }

    add(user) {
        return this.dataAccess.add(user);
    }

    deactivate(id) {
        // TODO: See about updating individual properties in data layer...

        let user = dataAccess.get(id);
        user.isActive = false;
        return this.dataAccess.update(user);
    }

    delete(id) {
        return this.dataAccess.delete(id);
    }
}

module.exports = UserService;