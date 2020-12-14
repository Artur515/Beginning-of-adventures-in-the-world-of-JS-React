import "./App.css";

import React, { useState, useEffect } from "react";
import FormUser from "./components/FormUser";
import ContentUser from "./components/ContentUser";
import Footer from "./components/FooterCount";
import SearchInput from "./components/SearchInput";

const App = () => {
    const userArr = [];
    const [users, setUsers] = useState(userArr);
    const createUser = (user) => {
        user.id = users.length + 1;
        setUsers([...users, user]);
    };

    const deleteUser = (id) => {
        setUsers(users.filter((user) => user.id !== id));
    };

    return (
        <div className="App">
            <FormUser createUser={createUser} />
            <ContentUser users={users} deleteUser={deleteUser} />
            <Footer users={users} />
            <SearchInput className="search" users={users} />
        </div>
    );
};

export default App;
