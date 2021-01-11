import React from "react";
import { useSelector } from "react-redux";
import Auth from "./Auth";
import Loader from "./Loader";
import Main from "./Main";

const Application = () => {
    const isAuth = useSelector((store) => store.auth.isAuth);
    const isLoader = useSelector((store) => store.ui.isLoader);
    return (
        <main>
            {isLoader && <Loader />}
            {isAuth ? <Main /> : <Auth />}
        </main>
    );
};

export default Application;
