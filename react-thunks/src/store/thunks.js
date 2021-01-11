import { getCurrentUserThunk } from "./auth/thunks";
import { getAllUsersThunk } from "./users/thunks";
export const initThunk = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: "LOADER_START" });
            await dispatch(getCurrentUserThunk());
            await dispatch(getAllUsersThunk());
        } catch (e) {
            console.log(e);
        } finally {
            dispatch({ type: "LOADER_STOP" });
        }
    };
};
