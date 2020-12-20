import React, { useState, useEffect } from "react";

const FormUser = (props) => {
    const formState = {
        id: null,
        name: "",
        surname: "",
        address: "",
    };
    const [user, setUser] = useState(formState);
    const handleChange = (e) => {
        const { name, value } = e.currentTarget;
        setUser({ ...user, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!user.name || !user.surname) return;
        props.createUser(user);
        setUser(formState);
    };
   
    return (
        <form className="form_user" onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                placeholder="Enter name"
            />
            <input
                type="text"
                name="surname"
                value={user.surname}
                onChange={handleChange}
                placeholder="Enter Surname"
            />
            <input
                type="text"
                name="address"
                value={user.address}
                onChange={handleChange}
                placeholder="Enter address"
            />
            <button>Create User</button>
        </form>
    );
};

export default FormUser;
