import {DELETE_USERS, GET_CURRENT_USER} from "../../constants/ActionTypes";


export const getCurrentUser = () => {
    return {type: GET_CURRENT_USER}
}

export const deleteUsers = (id) => {
    return {type: DELETE_USERS, payload: id}
}