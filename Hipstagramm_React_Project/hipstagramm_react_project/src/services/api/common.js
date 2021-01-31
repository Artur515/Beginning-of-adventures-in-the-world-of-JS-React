import store from "../../store";
import axios from "axios";


class Fetch {
    constructor(){
        this.api = axios.create({
            baseURL: 'https://hipstagram-api.herokuapp.com'
        })
        this._initInterceptors();
    }

    _initInterceptors(){
        this.api.interceptors.request.use(function (config) {
            const token = store.getState().auth.currentUser.access_token;
            config.headers = {
                ...config.headers,
                'Content-Type': 'application/json',
                'Authorization':token,
            }
            return config;
        }, function (error) {
            // Do something with request error
            return Promise.reject(error);
        });

        this.api.interceptors.response.use(function (response) {
            return response.data;
        }, function (error) {
            if (error.response.status === 401) {
                store.dispatch({type: 'LOGOUT'})
            }
            return Promise.reject(error);
        });

    }
    instance(){
        return this.api
    }
}

export default new Fetch();