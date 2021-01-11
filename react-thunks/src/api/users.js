import api from "./common";

class Users {
    constructor() {
        this.api = api.api;
    }

    getCurrentUser() {
        return this.api.get("/users/current");
    }
    getAllUsers() {
        return this.api.get("/users");
    }
    deletUser(id) {
        return this.api.delete("/users/" + id);
    }
}

export default new Users();
