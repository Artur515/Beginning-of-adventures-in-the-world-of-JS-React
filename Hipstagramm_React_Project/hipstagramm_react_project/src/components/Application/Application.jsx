import React from 'react'
import Registration from "../Registration/Rgistration";
import Auth from "../Auth/Auth";
import style from './style.module.css'


const Application = () => {
    return (
        <div className={style.wrapper}>

                <Registration/>
                <Auth/>
        </div>
    )
}

export default Application