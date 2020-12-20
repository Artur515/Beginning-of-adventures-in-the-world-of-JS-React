import "./App.css";

import React, { useState, useEffect } from "react";
import FormUser from "./components/FormUser";
import ContentUser from "./components/ContentUser";
import Footer from "./components/FooterCount";
import SearchInput from "./components/SearchInput";

const userArr = [];
let localeArr = JSON.parse(localStorage.getItem("users"));
let chooseArr = localeArr == null ? userArr : localeArr;

const App = () => {
    const [users, setUsers] = useState(chooseArr);

    const createUser = (user) => {
        user.id = users.length + 1;
        userArr.push(user);
        setUsers([...userArr]);
        localStorage.setItem("users", JSON.stringify([...userArr]));
        setUsers(JSON.parse(localStorage.getItem("users")));
    };
    const handleSearch = (event) => {
        const { value } = event.target;
        let result = chooseArr.filter((user) => {
            return user.name
                .toLowerCase()
                .includes(value.toLowerCase());
        });
        setUsers(result);
    };

    const deleteUser = (id) => {
        setUsers(users.filter((user) => user.id !== id));
    };

    return (
        <div className="App">
            <FormUser createUser={createUser} />
            <ContentUser users={users} deleteUser={deleteUser} />
            <Footer users={users} />
            <SearchInput
                className="search"
                handleSearch={handleSearch}
            />
        </div>
    );
};

export default App;
