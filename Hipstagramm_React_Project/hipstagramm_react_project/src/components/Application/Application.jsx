import React from 'react'
import Registration from "../Registration/Rgistration";
import Auth from "../Auth/Auth";
import {Route, Switch, useLocation} from "react-router-dom";
import Home from "../Home/Home";
import {animated, useTransition} from "react-spring";
import style from './style.module.css'

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
                            <Route exact path="/auth" component={Auth}/>
                            <Route exact path="/registration" component={Registration}/>
                        </Switch>
                    </div>

                </animated.div>
            ))}
        </div>
    )
}

export default Application