import {useDispatch, useSelector} from "react-redux";
import {Button, Dimmer, Icon, Image, Input, Loader, Segment} from "semantic-ui-react";
import style from './style.module.css'
import {connect} from 'react-redux';
import React, {useState} from "react";


///написать клик за пределом




const Users = () => {

    const dispatch = useDispatch
    const allUsers = useSelector((store) => store.users.listUsers)
    const [users, setUsers] = useState(allUsers)
    const chooseUsers = users == null ? allUsers : users

    const handleSearch = (event) => {
        const {value} = event.target
        let user = allUsers.filter((user) => {
            return user.login.toLowerCase().includes(value.toLowerCase())
        })
        setUsers(user)
        console.log(user)
    }


    if (allUsers !== null) {
        return (
            <div>
                <Input fluid icon='search' placeholder='Search...' onChange={handleSearch}/>
                {
                    chooseUsers.map((user) => {
                        return (
                            <div className={style.content} key={user._id}>
                                <img src={user.avatar} alt="avatar"/>
                                <h3>Login{user.login}</h3>
                                <br/>
                                {/*установит follow unfollow и поменять цвет*/}
                                <Button.Group>
                                    <Button basic color='blue' size='large'>Follow</Button>
                                    <Button basic color='red'>
                                        <Icon name=' user delete ' size='large'/></Button>
                                </Button.Group>
                            </div>
                        )
                    })
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