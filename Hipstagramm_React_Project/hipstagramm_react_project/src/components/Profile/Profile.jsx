import {useSelector} from "react-redux";
import React, {useState} from "react";

import style from './style.module.css'


const Profile = () => {
    const {user: currentUser} = useSelector((state) => state.auth)
    return (
        <div>
            lorem2000
        </div>
    )
}

export default Profile