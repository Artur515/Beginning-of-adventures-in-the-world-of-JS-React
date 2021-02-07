import {Button, Grid, Icon, Image, Segment} from "semantic-ui-react";
import style from './style.module.css'
import React from 'react'
import Password from "./Save_Password_form/Password_Form";
import Profile_form from "./Save_profile/Profile_form";



const Setting = () => {
    const onHandleChangePhoto = (event) => {
     if( event.target.files.length){
         console.log( event.target.files[0])
     }
    }


    return (
        <div>
            <Grid columns={2} stackable>
                <Grid.Row stretched>
                    <Grid.Column>
                        <Segment className={style.first_segment}>
                            <Image src={'https://handcraftguide.com/sites/default/files/styles/original___water/public/arthur_and_the_minimoys_01.jpg?itok=MuLeEyRQ'}
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
                        {<Profile_form/>}
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