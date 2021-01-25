import {combineReducers} from "redux";
import authentication from "../auth/reducer";
import message from "../message/reducer";


export const rootReducer = combineReducers({
    auth: authentication,
    message: message
})
