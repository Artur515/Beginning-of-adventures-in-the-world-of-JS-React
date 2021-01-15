import {ADD_USERS, GET_USERS} from "./actions";


const defaultState = {
    users: []
}


const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_USERS:
            return {...state, users: state.users + action.payload}
        case GET_USERS:
            return {...state, users: state.users - action.payload}
        default:
            return state
    }
}

export default userReducer