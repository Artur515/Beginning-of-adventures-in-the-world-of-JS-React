import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {rootReducer} from "./reducers";
import thunk from "redux-thunk";

const middleWare = [thunk]
const initialState = {}
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleWare)))

export default store