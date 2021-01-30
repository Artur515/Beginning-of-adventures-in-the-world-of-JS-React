import style from './style.module.css'
import {Container, Segment} from "semantic-ui-react";
import React from "react";
import Profile from "../Profile/Profile";
import Header from "../Header/Header";
import {Route} from "react-router-dom";

const Layout = () => {
    return (
        <div className={style.main}>
            <Header/>
            <div className={style.content}>
                <Container>
                    <Segment className={style.content}>
                    <Route exact path='/users/current' component={Profile}></Route>
                    </Segment>
                </Container>
            </div>
        </div>
    )
}

export default Layout