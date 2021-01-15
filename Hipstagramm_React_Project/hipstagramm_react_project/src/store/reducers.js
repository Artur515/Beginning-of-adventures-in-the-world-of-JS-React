import {combineReducers} from "redux";

import {authReducer} from "./auth/reducer";
import {registrationReducer} from "./registration/reducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    registration: registrationReducer
})


