import {useSelector} from "react-redux";
import React, {useState} from "react";
import style from './style.module.css'
import {Button, Item} from "semantic-ui-react";




const Profile = () => {



    const user = useSelector((store) => store.users.currentUser)
    console.log(user)

if(user!==null){
    const {login, avatar, id, email, posts, followers, following} = user
    return (

        <>     { console.log(user.following)}
            <div>
                <Item.Group relaxed>
                    <Item>
                        <Item.Image size='small'
                                    src='https://img1.picmix.com/output/stamp/normal/5/0/5/9/979505_7c404.png'/>
                        <Item.Content verticalAlign='middle'>
                            <Item.Header> <Button content='Follow' basic/></Item.Header>
                            {/*<Item.Description>Hello</Item.Description>*/}
                            <Item.Extra>
                                <div className={style.info}>
                                    <div> post:{posts.length}</div>
                                    <div> followers:{followers.length}</div>
                                    <div> following:{following.length}</div>
                                </div>
                            </Item.Extra>
                        </Item.Content>
                    </Item>

                </Item.Group>
            </div>
            <div className={style.line}></div>
            <Item>
                <Item.Content verticalAlign='middle'>
                    <div>
                        <h2>{login}</h2>
                        <p>{email}</p>
                    </div>
                </Item.Content>
            </Item>
        </>
    )}else {
    return (<h1>Loading</h1>)
}
}

export default Profile