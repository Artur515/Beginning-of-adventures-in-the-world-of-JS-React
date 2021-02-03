import {DELETE_USERS, GET_CURRENT_USER, GET_USERS} from "../../constants/ActionTypes";


const initialStateOfUsers = {
    listUsers: null,
    currentUser: null
}


export const usersReducer = (state = initialStateOfUsers, action) => {
    switch (action.type) {
        case GET_USERS:
            return {...state, listUsers: action.payload}
        case GET_CURRENT_USER:
            return {...state, currentUser: action.payload}
        case DELETE_USERS:
            return {...state, listUsers: state.listUsers.filter((user) => user.id !== action.payload),}
        default:
            return state
    }
}