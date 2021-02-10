import {useDispatch, useSelector} from "react-redux";
import {Button, Dimmer, Image, Input, Loader, Segment} from "semantic-ui-react";
import style from './style.module.css'
import {connect} from 'react-redux';
import React, {useState} from "react";
import {Link, NavLink} from "react-router-dom";
import User_profile from "./User/User_Profile";

///написать клик за пределом

const Users = (props) => {


    const dispatch = useDispatch
    const allUsers = useSelector((store) => store.users.listUsers)
    const [filterUsers, setFilterUsers] = useState(allUsers)
    const chooseUsers = filterUsers == null ? allUsers : filterUsers

    console.log(allUsers)
    const handleSearch = (event) => {
        const {value} = event.target
        let user = allUsers.filter((user) => {
            return user.login.toLowerCase().includes(value.toLowerCase())
        })

        setFilterUsers(user)
    }

    if (allUsers !== null) {
        return (
            <div>
                <Input fluid icon='search' placeholder='Search...' onChange={handleSearch}/>
                {    
                           chooseUsers.map((user) => {
                            return (
                                <div className={style.content} key={user._id}>
                                    <NavLink to={'/users/:' + user._id}>
                                        <img src={user.avatar} alt="avatar"/></NavLink>
                                    <Link><h3>{user.login}</h3></Link>
                                    <br/>
                                    {/*установить follow unfollow и поменять цвет*/}
                                    <Button basic color='blue' size='large'>Follow</Button>
                                </div>

                            )
                            },
                                     )
            }
            </div>
        )
    } else {
        return <Segment>
            <Dimmer active inverted>
                <Loader size='large'>Loading</Loader>
            </Dimmer>
            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png'/>
        </Segment>
    }

}

export default connect()(Users)