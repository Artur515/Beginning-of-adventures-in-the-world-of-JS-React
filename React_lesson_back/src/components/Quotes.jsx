import React, { useEffect, useContext } from "react";
import api from "../api";
import { GlobalContext } from "../App";

const Quotes = ({ dispatch }) => {
    const context = useContext(GlobalContext);
    useEffect(() => {
        api.getUsers().then((res) => {
            context.dispatch({ type: "GET_USERS", payload: res.data });
        });
    }, []);

    console.log(context);

    return <div>Quotes</div>;
};

export default Quotes;
