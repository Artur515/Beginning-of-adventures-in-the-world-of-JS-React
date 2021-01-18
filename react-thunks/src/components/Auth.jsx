import React from "react";
import { connect } from "react-redux";
import { authApi, usersApi } from "../api";

const mapDispatchToProps = (dispatch) => {
    return {
        loginDispatch: (token) =>
            dispatch({ type: "LOGIN", payload: token }),
        initDispatch: (currentUser) =>
            dispatch({ type: "INIT", payload: currentUser }),
        startLoader: () => dispatch({ type: "LOADER_START" }),
        stopLoader: () => dispatch({ type: "LOADER_STOP" }),
    };
};

const Auth = ({
    startLoader,
    stopLoader,
    loginDispatch,
    initDispatch,
}) => {
    const handleSubmit = async (e) => {
        startLoader();
        e.preventDefault();
        const { login, password } = e.target.elements;
        const body = {
            login: login.value,
            password: password.value,
        };
        try {
            const { access_token } = await authApi.login(body);
            loginDispatch(access_token);
            const currentUser = await usersApi.getCurrentUser();
            initDispatch(currentUser);
        } catch (err) {
        } finally {
            stopLoader();
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter login"
                name="login"
            />
            <input
                type="text"
                placeholder="Enter password"
                name="password"
            />
            <button type="submit">Login</button>
        </form>
    );
};

export default connect(null, mapDispatchToProps)(Auth);
