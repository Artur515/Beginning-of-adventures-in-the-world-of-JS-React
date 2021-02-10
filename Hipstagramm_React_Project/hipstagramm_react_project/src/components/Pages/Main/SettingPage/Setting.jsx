import {Button, Grid, Icon, Image, Segment} from "semantic-ui-react";
import style from './style.module.css'
import React, {useState} from 'react'
import Password from "./Save_Password_form/Password_Form";
import Profile_form from "./Save_profile/Profile_form";
import {useSelector} from "react-redux";

const defaultAvatar = 'https://handcraftguide.com/sites/default/files/styles/original___water/public/arthur_and_the_minimoys_01.jpg?itok=MuLeEyRQ'

const Setting = () => {
    const user = useSelector((store) => store.users.currentUser)
    const [imageUser, setImageUser] = useState(user.avatar)

    const onHandleChangePhoto = (event) => {
        const reader = new FileReader()
        let imageFromInput = event.target.files[0]
        if (imageFromInput !== null) {
            reader.onloadend = () => {
                setImageUser({
                    imagePreview: reader.result
                })
            }
            reader.readAsDataURL(imageFromInput)
        } else {
            return setImageUser({
                imagePreview: user.avatar || defaultAvatar
            })
        }
    }
    console.log(imageUser.imagePreview)

    return (
        <div>
            <Grid columns={2} stackable>
                <Grid.Row stretched>
                    <Grid.Column>
                        <Segment className={style.first_segment}>
                            <Image
                                src={'https://handcraftguide.com/sites/default/files/styles/original___water/public/arthur_and_the_minimoys_01.jpg?itok=MuLeEyRQ'}
                                size='medium'
                            /><br/>
                            <label>Change photo </label>
                            <Button as="label" htmlFor="file" type="button" animated="fade" className={style.button}
                                    secondary>
                                <Button.Content visible>
                                    <Icon name="photo"/>
                                </Button.Content>
                                <Button.Content hidden>Change photo</Button.Content>
                            </Button><br/>
                            <input
                                type="file"
                                id="file"
                                hidden
                                onChange={onHandleChangePhoto}
                            />
                        </Segment>
                    </Grid.Column>
                    <Grid.Column>
                        {<Profile_form imageUser={imageUser} defaulAvatar={defaultAvatar}/>}
                    </Grid.Column>
                </Grid.Row>
                <Grid.Column width={16}>
                    {<Password/>}
                </Grid.Column>
            </Grid>
        </div>
    )
}


export default Setting