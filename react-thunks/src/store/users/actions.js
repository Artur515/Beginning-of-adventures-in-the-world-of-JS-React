import { ActionTypes } from "./actionTypes"

let id = 1;

export const addUserAction = data => {
    data = {...data, id: id++}
    return {type: ActionTypes.ADD_USER, payload: data}
}

export const deleteUserAction = id => {
    return {type: ActionTypes.DELETE_USER, payload: id}
}