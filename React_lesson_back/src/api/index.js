import axios from "axios";

class Fetch {
    constructor() {
        this.api = axios.create({
            baseURL: "https://hipstagram-api.herokuapp.com",
        });
        this.api.interceptors.request.use(
            function (config) {
                // Do something before request is sent

                config.headers = {
                    "Content-Type": "application/json",
                    Authorization: localStorage.getItem("token"),
                };
                return config;
            },
            function (error) {
                // Do something with request error
                return Promise.reject(error);
            }
        );
    }
    //interceptor axios needs

    registration(body) {
        return this.api.post("/auth/registration", body);
    }
    login(body) {
        return this.api.post("/auth/login", body);
    }
    getCurrentUser() {
        return this.api.get("/users/current");
    }
    getUsers() {
        return this.api.get("/users");
    }
}

export default new Fetch();
