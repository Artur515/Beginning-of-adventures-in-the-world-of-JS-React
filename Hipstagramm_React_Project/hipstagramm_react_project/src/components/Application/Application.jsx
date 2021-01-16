import React from 'react'
import Registration from "../Registration/Rgistration";
import Auth from "../Auth/Auth";
import style from './style.module.css'
import {Grid} from "semantic-ui-react";


const Application = () => {
    return (
        <Grid>
            <Grid.Column mobile={16} tablet={8} computer={4}>
                <div className={style.wrapper}>
                    <Registration/>
                    {/*<Auth/>*/}
                </div>
            </Grid.Column>
        </Grid>
    )
}

export default Application