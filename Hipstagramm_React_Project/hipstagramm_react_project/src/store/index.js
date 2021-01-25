import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {rootReducer} from "../reducers/rootReducer/reducer";


const middlewares = applyMiddleware(thunk);

const store = createStore(rootReducer, composeWithDevTools(middlewares))


export default store