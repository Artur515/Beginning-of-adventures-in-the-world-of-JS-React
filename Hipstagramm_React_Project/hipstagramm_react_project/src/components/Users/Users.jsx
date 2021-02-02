import {useDispatch, useSelector} from "react-redux";
import {Button, Icon} from "semantic-ui-react";
import style from './style.module.css'
import {connect} from 'react-redux';
///написать клик за пределом

const Users = () => {

    const dispatch = useDispatch

    const allUsers = useSelector((store) => store.users.listUsers)


    return (
        <div>
            {
                allUsers.map((user) => {
                    return (
                        <div className={style.content} key={user._id}>
                            <img src={user.avatar} alt="avatar"/>
                            <h3>Login{user.login}</h3>
                            <br/>
                            {/*установит follow unfollow и поменять цвет*/}
                            <Button.Group>
                                <Button basic color='blue' size='large'>Follow</Button>
                                <Button basic color='red' >
                                    <Icon name=' user delete ' size='large'/></Button>
                            </Button.Group>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default connect()(Users)