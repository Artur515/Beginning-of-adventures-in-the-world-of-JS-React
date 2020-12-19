import "./App.css";
import React, { useReducer, useState, useEffect } from "react";
import { getTokenFromLS } from "./services/localStorage";
import Auth from "./components/Auth";
import Quotes from "./components/Quotes";
import api from "./api";

export const GlobalContext = React.createContext(null);

const initialStore = { auth: { isAuth: false, currentUser: {} }, users: [] };
const reducder = (store, action) => {
    switch (action.type) {
        case "LOGIN":
            return { ...store, auth: { isAuth: true, currentUser: action.payload } };
        case "GET_USERS":
            return { ...store, users: action.payload };
        default:
            return store;
    }
};

const App = () => {
    const [store, dispatch] = useReducer(reducder, initialStore);

    useEffect(() => {
        api.getCurrentUser().then((res) => {
            dispatch({ type: "LOGIN", payload: res.data });
        });
    }, []);

    return (
        <GlobalContext.Provider value={{ store, dispatch }}>
            {store.auth.isAuth ? <Quotes /> : <Auth dispatch={dispatch} />}
        </GlobalContext.Provider>
    );
};

export default App;
