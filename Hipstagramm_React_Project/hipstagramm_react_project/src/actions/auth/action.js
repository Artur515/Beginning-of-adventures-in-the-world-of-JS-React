import {loginCurrentUser, logOutCurrentUser, registrationCurrentUser} from "../../services/authentication_service ";
import {
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT,
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    SET_MESSAGE
} from "../../constants/ActionTypes";


export const registration = (username, email, password) => (dispatch) => {
    return registrationCurrentUser(username, email, password)
        .then((response) => {
                dispatch({type: REGISTER_SUCCESS,})
                dispatch({type: SET_MESSAGE, payload: response.data.message})
                return Promise.resolve()
            }, (error) => {
                const message = (
                    error.response &&
                    error.response.data &&
                    error.response.data.message) || error.message || error.toString()
                dispatch({type: REGISTER_FAIL})
                dispatch({type: SET_MESSAGE, payload: message})
                return Promise.reject()
            }
        )
}

export const login = (username, password) => (dispatch) => {
    return loginCurrentUser(username, password)
        .then((data) => {
                dispatch({type: LOGIN_SUCCESS, payload: {user: data}})
                return Promise.resolve()
            }, (error) => {
                const message = (error.response &&
                    error.response.data &&
                    error.response.data.message) || error.message || error.toString()
                dispatch({type: LOGIN_FAIL})
                dispatch({type: SET_MESSAGE, payload: message})
                return Promise.reject()
            }
        )
}

export const logOut = () => (dispatch) => {
    logOutCurrentUser()
    dispatch({type: LOGOUT})
}

//создаем actionCreators для ассинхронных запросов и dispatch result и тоже сделаем в login