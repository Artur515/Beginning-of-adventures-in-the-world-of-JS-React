import React, { useEffect } from "react";
import Header from "./containers/Header";
import Users from "./containers/Users";
import { userData } from "./data/UserData";
import "./App.css";
import { useState } from "react";

const App = () => {
    const [users, setUsers] = useState(userData);
    // const [modal, setModal] = useState(false)
    // useEffect(() => {
    //   setModal(true)
    //   setTimeout(()=>{
    //     setModal(false)
    //   }, 500)
    // }, [films])
    const handleSearchFilms = (evt) => {
        const { value } = evt.target;
        const result = userData.filter((user) => {
            return user.name
                .toLocaleLowerCase()
                .includes(value.toLocaleLowerCase());
        });
        setUsers(result);
    };
    const handleSortFilms = (evt) => {
        const { value } = evt.target;
        if (value === "default") {
            setUsers(userData);
            return;
        }
        const result = [...userData].sort((a, b) => {
            return value === "from" ? a.age - b.age : b.age - a.age;
        });
        setUsers(result);
    };
    return (
        <div className="App">
            <Header
                handleSearchFilms={handleSearchFilms}
                handleSortFilms={handleSortFilms}
            />
            <div className="container">
                <Users users={users} />
            </div>
        </div>
    );
};

export default App;
