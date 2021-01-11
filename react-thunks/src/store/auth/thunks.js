import { usersApi } from "../../api";

export const getCurrentUserThunk = (currentUser) => {
    //возвращает функцию
    return async (dispatch, getState) => {
        try {
            const currentUser = await usersApi.getCurrentUser();
            dispatch({ type: "INIT", payload: currentUser });
        } catch (e) {
            console.log(e);
        }
    };
};
