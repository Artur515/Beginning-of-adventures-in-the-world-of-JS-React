import {applyMiddleware, createStore} from "redux";
import authReducer from "./auth/reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";


const middlewares = applyMiddleware(thunk);

const store = createStore(authReducer, composeWithDevTools(middlewares))


export default store