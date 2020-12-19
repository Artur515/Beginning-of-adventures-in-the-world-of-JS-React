import React, { useState, useReducer } from "react";
import api from "../api";

const Registration = () => {
    const handleRegistration = (e) => {
        e.preventDefault();
        const { login, password, email } = e.target.elements;
        const userData = {
            login: login.value,
            password: password.value,
            email: email.value,
        };
        api.registration(userData)
            .then((res) => {
                console.log(res.data);
            })
            .catch((e) => console.log(e));
    };
    return (
        <form onSubmit={handleRegistration}>
            <input name="login" type="text" placeholder="login" />
            <input name="password" type="text" placeholder="password" />
            <input name="email" type="text" placeholder="email" />
            <button type="submit">Registr</button>
        </form>
    );
};

const Login = ({ dispatch }) => {
    const handleLogin = (e) => {
        e.preventDefault();
        const { login, password, email } = e.target.elements;
        const userData = {
            login: login.value,
            password: password.value,
        };
        api.login(userData)
            .then((res) => {
                const { access_token } = res.data;
                localStorage.setItem("token", access_token);
                dispatch({ type: "LOGIN", payload: access_token });
            })
            .catch((e) => console.log(e));
    };
    return (
        <form onSubmit={handleLogin}>
            <input name="login" type="text" placeholder="login" />
            <input name="password" type="text" placeholder="password" />
            <button type="submit">Login</button>
        </form>
    );
};

const Auth = ({ dispatch }) => {
    const [isLogin, setIsLogin] = useState(true);
    return (
        <div>
            <button onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? "Get Registration" : "Get Login"}
            </button>
            {!isLogin ? <Registration /> : <Login dispatch={dispatch} />}
        </div>
    );
};

export default Auth;
