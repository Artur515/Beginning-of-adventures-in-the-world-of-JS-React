import {useSelector} from "react-redux";
import React,{useState} from "react";
import {Segment, Container, Menu, Input} from "semantic-ui-react";
import style from './style.module.css'
import {Link} from "react-router-dom";



const Profile = () => {
    const {user: currentUser} = useSelector((state) => state.auth)
    return (
    <div className={style.app}>
        <Menu stackable size={"massive"}  >
            <Menu.Item>
                <img src='/logo.png' />
              <span><h2>Hipstagramm</h2></span>
            </Menu.Item>
            <Menu.Item>
                <Input icon='search' placeholder='Search...' />
            </Menu.Item>
        </Menu>
            <Container  >
                <Segment className={style.main}> </Segment>
            </Container>
        </div>
    )
}

export default Profile