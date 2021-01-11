import { usersApi } from "../../api";

export const getAllUsersThunk = () => {
    return async (dispatch) => {
        try {
            const users = await usersApi.getAllUsers();
            dispatch({ type: "GET_USERS", payload: users });
        } catch (e) {
            console.log(e);
        }
    };
};
export const deleteUsersThunk = (id) => {
    return async (dispatch) => {
        try {
            await usersApi.deletUser();
            dispatch({ type: "DELETE_USERS", payload: id });
        } catch (e) {
            console.log(e);
        }
    };
};
