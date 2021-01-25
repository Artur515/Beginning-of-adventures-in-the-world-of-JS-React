import {LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, REGISTER_FAIL, REGISTER_SUCCESS} from "../../constants/ActionTypes";

const currentUser = JSON.parse(localStorage.getItem('currentUserToken'))

const initialState = currentUser ? {isLoggedIn: true, currentUser} : {isLoggedIn: false, currentUser: null}

const authentication = (state = initialState, action) => {
    const {type, payload} = action
    switch (type) {
        case REGISTER_SUCCESS:
            return {...state, isLoggedIn: false}
        case REGISTER_FAIL:
            return {...state, isLoggedIn: false}
        case LOGIN_SUCCESS:
            return {...state, isLoggedIn: true, currentUser: payload.user}
        case LOGIN_FAIL:
            return {...state, isLoggedIn: false, currentUser: null}
        case LOGOUT:
            return {...state, isLoggedIn: false, currentUser: null}
        default:
            return state
    }
}

export default authentication