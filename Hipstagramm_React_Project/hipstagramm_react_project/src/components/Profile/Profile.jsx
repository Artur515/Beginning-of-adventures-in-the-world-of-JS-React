import {useSelector} from "react-redux";
import React from "react";

import style from './style.module.css'


const Profile = () => {



    const user = useSelector((store) => store.users.currentUser)
    const {login,avatar,_id,email}=user
    return (
        <div>


                        <div>
                            <p>id:{_id}</p>
                            <img src={avatar} alt=""/>
                            <h6>Login{login}</h6>
                            <p>email{email}</p>
                        </div>


        </div>
    )
}

export default Profile