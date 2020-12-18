import "./App.css";

import React, { useState, useEffect } from "react";
import FormUser from "./components/FormUser";
import ContentUser from "./components/ContentUser";
import Footer from "./components/FooterCount";
import SearchInput from "./components/SearchInput";

const userArr = [];

const App = () => {
    const [users, setUsers] = useState(userArr);
    const createUser = (user) => {
        user.id = users.length + 1;
        userArr.push(user);
        setUsers([...userArr]);
    };
    const handleSearch = (event) => {
        const { value } = event.target;
        let result = userArr.filter((user) => {
            return user.name.toLowerCase().includes(value.toLowerCase());
        });
        setUsers(result);
        console.log(result);
    };

    const deleteUser = (id) => {
        setUsers(users.filter((user) => user.id !== id));
    };

    return (
        <div className="App">
            <FormUser createUser={createUser} />
            <ContentUser users={users} deleteUser={deleteUser} />
            <Footer users={users} />
            <SearchInput className="search" handleSearch={handleSearch} />
        </div>
    );
};

export default App;
