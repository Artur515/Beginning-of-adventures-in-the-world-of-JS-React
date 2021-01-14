import {ActionsTypes} from "./ActionsTypes";


const defaultState = {
    users: []
}


const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ActionsTypes.ADD_USERS:
            return {...state, users: state.users + action.payload}
        case ActionsTypes.GET_USERS:
            return {...state, users: state.users - action.payload}
        default:
            return state
    }
}

export default userReducer