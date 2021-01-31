import {DELETE_USERS, GET_CURRENT_USER, GET_USERS} from "../../constants/ActionTypes";
import {userApi} from "../../services/api";


export const getAllUsersThunk = () => {
    return async (dispatch) => {
        try {
            const users = await userApi.getAllUsers()
            dispatch({type: GET_USERS, payload: users})
        } catch (error) {
            console.log(error)
        }
    }
}

export const getCurrentUserThunk=()=>{
    return async (dispatch) => {
        try {
            const currentUser = await userApi.getCurrentUser()
            dispatch({type: GET_CURRENT_USER, payload: currentUser})
        } catch (error) {
            console.log(error)
        }
    }
}

export const deleteUsersThunk = (id) => {
    return async (dispatch) => {
        try {
            await userApi.deleteUser()
            dispatch({type: DELETE_USERS, payload: id})
        } catch (error) {
            console.log(error)
        }
    }
}