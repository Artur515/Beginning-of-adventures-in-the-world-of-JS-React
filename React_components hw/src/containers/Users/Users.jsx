import React from "react";
import User from "../../components/User";
import "./style.css";
const Users = ({ users }) => {
    return (
        <main className="wrapper">
            {users.map((user) => (
                <User user={user} key={user.id} />
            ))}
        </main>
    );
};
export default Users;
