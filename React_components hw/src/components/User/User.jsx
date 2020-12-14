import React from "react";
import "./style.css";

const User = ({ user }) => {
    return (
        <div className="card">
            <h3>Name: {user.name}</h3>
            <p>age: {user.age}</p>
            <p>Gender "{user.gender}"</p>
            <p>Balance {user.balance}$</p>
        </div>
    );
};

export default User;
