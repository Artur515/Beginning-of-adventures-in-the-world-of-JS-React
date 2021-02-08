import {useSelector} from "react-redux";
import React from "react";
import style from './style.module.css'
import {Button, Dimmer, Form, Icon, Image, Item, Loader, Segment, TextArea} from "semantic-ui-react";
import Posts from "./Posts/Posts";


const Profile = () => {
    const user = useSelector((store) => store.users.currentUser)
    console.log(user)

    if (user !== null) {
        const {login, avatar, id, email, posts, followers, following} = user
        return (
            <>     {console.log(user.following)}
                <div>
                    <Item.Group relaxed>
                        <Item>
                            <Item.Image size='small'
                                        src='https://img1.picmix.com/output/stamp/normal/5/0/5/9/979505_7c404.png'/>
                            <Item.Content verticalAlign='middle'>
                                <Item.Extra>
                                    <div className={style.info}>
                                        <div className={style.post}> post: {posts.length}</div>
                                        <div className={style.post}> followers: {followers.length}</div>
                                        <div className={style.post}> following: {following.length}</div>
                                    </div>
                                </Item.Extra>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </div>
                <div className={style.line}></div>
                <Item>
                    <Item.Content verticalAlign='middle'>
                        <h2>{login}</h2>
                        <span>{email}</span>
                    </Item.Content>
                </Item>
                <div>
                    <Form>
                        <TextArea placeholder='Add post'/>
                    </Form>
                    <Button animated secondary>
                        <Button.Content visible>Add post</Button.Content>
                        <Button.Content hidden>
                            <Icon name=' pencil alternate'/>
                        </Button.Content>
                    </Button>
                </div>
                <div className={style.line}></div>
<div className={style.posts}>

<Posts/>
</div>
            </>
        )
    } else {
        return (
            <Segment>
                <Dimmer active inverted>
                    <Loader size='large'>Loading</Loader>
                </Dimmer>
                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png'/>
            </Segment>
        )
    }
}

export default Profile