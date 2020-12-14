import React from "react";
import api from "../api";

const Quotes = () => {
    const handleGetUsers = () => {
        api.getUsers()
            .then((res) => {
                console.log(res.data);
            })
            .catch((e) => {
                console.log(e);
            });
    };
    return <button onClick={handleGetUsers}>get users</button>;
};

export default Quotes;
