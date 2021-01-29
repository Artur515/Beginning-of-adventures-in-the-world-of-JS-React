import axios from "axios";

export const authHeader = () => {
    const currentUser = JSON.parse(localStorage.getItem('currentUserToken'))
    if (currentUser && currentUser.accessToken) {
        return {access_token:'Bearer'+ currentUser.accessToken}
    } else {
        return {}
    }
}


export const instance = axios.create({
    baseURL: 'https://hipstagram-api.herokuapp.com',
    headers: authHeader()//здесь токен
})