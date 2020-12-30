import React, { useState, useEffect } from "react";

const ContentUser = (props) => {
    const handleUserDelete = (id) => {
        props.deleteUser(id);
    };

    return (
        <div className="content">
            {props.users.map((user) => (
                <div className="user_cart" key={user.id}>
                    <h4>{user.name}</h4>
                    <h4>{user.surname}</h4>
                    <h4>{user.address}</h4>
                    <button onClick={() => handleUserDelete(user.id)}>
                        Remove User
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ContentUser;
