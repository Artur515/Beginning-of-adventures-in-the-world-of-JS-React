import {applyMiddleware, combineReducers, createStore} from "redux";
import userReducer from "../Users/userReducer";
import {uiReducer} from "../ui/uiReducer";
import {composeWithDevTools} from "redux-devtools-extension";

const rootReducer = combineReducers({
    users: userReducer,
    ui: uiReducer
})


const store = createStore(rootReducer,composeWithDevTools(applyMiddleware()))

export default store