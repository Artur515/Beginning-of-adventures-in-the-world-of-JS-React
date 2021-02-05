import React from 'react'
import Registration from "../Pages/Authentication/container/Registration/Rgistration";
import Auth from "../Pages/Authentication/container/Auth/Auth";
import {Route, Switch, useLocation, NavLink} from "react-router-dom";
import Home from "../Pages/Authentication/container/Home/Home";
import {animated, useTransition} from "react-spring";
import style from './style.module.css'
import Layout from "../Pages/Main/Layout/Layout";

const Application = () => {


    const location = useLocation()
    const transitions = useTransition(location, location => location.pathname, {
        from: {
            opacity: 0,
            transform: '0.5s'
        },
        enter: {
            opacity: 1,
            transform: '0.5s'
        },
        leave: {
            opacity: 0,
            transform: '0.5s'
        }
    })

    return (
        <div className={style.wrapper}>
            {transitions.map(({item, props, key}) => (
                <animated.div key={key} style={props}>
                    <div className={style.main}>
                        <Switch location={item}>
                            <Route exact path="/" component={Home}/>
                            <Route path="/auth/login" component={Auth}/>
                            <Route path="/auth/registration" component={Registration}/>
                            <Route path='/users' component={Layout}></Route>
                        </Switch>
                    </div>

                </animated.div>
            ))}
        </div>
    )
}

export default Application