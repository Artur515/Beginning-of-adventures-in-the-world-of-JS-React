import style from './style.module.css'
import {Container, Segment} from "semantic-ui-react";
import React from "react";
import Profile from "../Profile/Profile";
import Header from "../../../Header/Header";
import {Route, Switch} from "react-router-dom";
import Users from "../Users/Users";

const Layout = () => {
    return (
        <div className={style.main}>
            <Header/>
            <div className={style.content}>
                <Container>
                    <Segment className={style.content}>
                        <Switch>
                            <Route exact path='/users' component={Users}></Route>
                            <Route path='/users/current' component={Profile}></Route>
                        </Switch>
                    </Segment>
                </Container>
            </div>
        </div>
    )
}

export default Layout