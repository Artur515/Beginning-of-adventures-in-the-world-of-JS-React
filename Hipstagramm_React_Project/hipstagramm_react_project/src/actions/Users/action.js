import {DELETE_USERS, GET_CURRENT_USER, GET_USERS} from "../../constants/ActionTypes";

export const getUsers = () => {
    return {type: GET_USERS}
}

export const getCurrentUser = () => {
    return {type: GET_CURRENT_USER}
}

export const deleteUsers = (id) => {
    return {type: DELETE_USERS, payload: id}
}