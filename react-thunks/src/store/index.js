import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { usersReducer } from "./users/reducer";
import { authReducer } from "./auth/reducer";
import { uiReducer } from "./ui/reducer";
import { initThunk } from "./thunks";

const rootReducer = combineReducers({
    auth: authReducer,
    users: usersReducer,
    ui: uiReducer,
});

const middlewares = applyMiddleware(thunk);

const store = createStore(
    rootReducer,
    composeWithDevTools(middlewares)
);

store.dispatch(initThunk());

export default store;
