
import {getAllUsersThunk, getCurrentUserThunk} from "../usersThunk";

export const initThunk = () => {
    return async (dispatch) => {
        try {
            await dispatch(getCurrentUserThunk())
            await dispatch(getAllUsersThunk())
        } catch (error) {
            console.log(error)
        }

    }

}