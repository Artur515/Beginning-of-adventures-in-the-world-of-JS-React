import axios from "axios";

const API_URL = 'https://hipstagram-api.herokuapp.com'

export const registrationCurrentUser = (login,email,password) => {
    return axios.post(API_URL + '/auth/registration', {login,email,password})
}

export const loginCurrentUser = (login, password) => {
    return axios.post(API_URL + '/auth/login', {login, password})
        .then((response) => {
            if (response.data.access_token) {
                localStorage.setItem('currentUserToken', JSON.stringify(response.data))
            }
            return response.data
        })
}




export const logOutCurrentUser = () => {
    localStorage.removeItem('currentUserToken')
}

