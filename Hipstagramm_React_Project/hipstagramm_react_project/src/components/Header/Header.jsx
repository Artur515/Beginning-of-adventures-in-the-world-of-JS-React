import {Icon, Input, Menu} from "semantic-ui-react";
import React, {useState} from "react";
import style from './style.module.css'
import {useDispatch, useSelector} from "react-redux";
import {logOut} from "../../actions/auth/action";
import {Link} from "react-router-dom";


const Header = (props) => {


    const [activeItem, setActiveItem] = useState({activeItem: 'home'})
    const handleItemClick = (e, {name}) => setActiveItem({activeItem: name})
    const dispatch = useDispatch()
    const {isLoggedIn} = useSelector((state) => state.auth);

    const handleLogOut = () => {
        dispatch(logOut())
        window.location.replace('/auth/login')
    }


    return (
        <div>
            <Menu stackable size='large'>
                <Menu.Item>
                    <img src='/logo.png'/>
                    <p><Link onClick={() => window.location.reload()} className={style.link}><h3>Hipstagramm</h3></Link>
                    </p>
                </Menu.Item>
                <Menu.Item name='home'
                           active={activeItem === 'home'}
                           onClick={handleItemClick}><Link to='/users/current'
                                                           className={style.link}>Profile</Link></Menu.Item>
                <Menu.Item name='setting'
                           active={activeItem === 'setting'}
                           onClick={handleItemClick}><Link to='/users/setting' className={style.link}>Setting</Link></Menu.Item>
                <Menu.Item name='users'
                           active={activeItem === 'users'}
                           onClick={handleItemClick}><Link to='/users' className={style.link}>Users</Link></Menu.Item>
                <Menu.Item
                    position='right'
                    name='logout'
                    active={activeItem === 'logout'}
                    onClick={handleLogOut}><Icon name='log out' color="red"/>
                    <p className={style.link}>Logout</p>
                </Menu.Item>
            </Menu>

        </div>
    )
}

export default Header