import {useSelector} from "react-redux";
import React from "react";
import style from './style.module.css'
import {Button, Dimmer, Form, Icon, Image, Item, Loader, Segment, TextArea} from "semantic-ui-react";
import Posts from "./Posts/Posts";
import Preloader from "../../../../helpers/preloaders/Preloader";


const Profile = () => {
const defaultAvatar='https://img1.picmix.com/output/stamp/normal/5/0/5/9/979505_7c404.png'
    const user = useSelector((store) => store.users.currentUser)
    console.log(user)
    const handleAddPost = () => {

    }


    if (user !== null) {
        const {login, avatar, id, email, posts, followers, following} = user
        return (
            <>     {console.log(user.following)}
                <div>
                    <Item.Group relaxed>
                        <Item>
                            <Item.Image size='small'
                                        src={avatar||defaultAvatar}/>
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
                    <Form className={style.form}>
                        <TextArea placeholder='Add post'/>
                        <Button as="label" htmlFor="file" type="button" animated="fade" secondary>
                            <Button.Content visible>
                                <Icon name="send"/>
                            </Button.Content>
                            <Button.Content hidden>Add post</Button.Content>
                        </Button><br/>
                        <input
                            type="file"
                            id="file"
                            hidden
                            onChange={handleAddPost}
                        />
                    </Form>
                </div>
                <div className={style.line}></div>
                <div className={style.posts}>

                    <Posts/>
                </div>
            </>
        )
    } else {
        return (
     <Preloader/>
            // <Segment>
            //     <Dimmer active inverted>
            //         <Loader size='large'>Loading</Loader>
            //     </Dimmer>
            //     <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png'/>
            // </Segment>
        )
    }
}

export default Profile