import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUsersThunk } from "../store/users/thunks";

const Main = () => {
    const usersList = useSelector((store) => store.users.list);
    const dispatch = useDispatch;

    const handleDeleteUsers = (id) => dispatch(deleteUsersThunk(id));
    return (
        <main>
            {usersList.map((user) => {
                return (
                    <div>
                        <p>ID:{user._id}</p>
                        <img src={user.avatar} alt="" />
                        <h6>Login{user.login}</h6>
                        <button onClick={handleDeleteUsers(user._id)}>Delete</button>
                    </div>
                );
            })}
        </main>
    );
};

export default Main;
