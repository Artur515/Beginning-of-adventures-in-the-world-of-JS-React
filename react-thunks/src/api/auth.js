import api from './common';

class Auth {
    constructor(){
        this.api = api.api;
    }

    login(body){
        return this.api.post('/auth/login', body);
    }
}

export default new Auth();