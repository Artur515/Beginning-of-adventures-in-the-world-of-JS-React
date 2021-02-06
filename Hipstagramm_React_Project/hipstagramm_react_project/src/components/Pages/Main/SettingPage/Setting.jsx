import {Button, Grid, Icon, Image, Segment} from "semantic-ui-react";
import style from './style.module.css'
import React from 'react'
import Password from "./Save_Password_form/Password_Form";
import Profile_form from "./Save_profile/Profile_form";


const Setting = () => {

    return (
        <div>
            <Grid columns={2} stackable>
                <Grid.Row stretched>
                    <Grid.Column>
                        <Segment className={style.first_segment}>
                            <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png'
                                   size='medium'
                            /><br/>
                            <label>Change photo </label>
                            <Button as="label" htmlFor="file" type="button" animated="fade" className={style.button}>
                                <Button.Content visible>
                                    <Icon name="file"/>
                                </Button.Content>
                                <Button.Content hidden>Change photo</Button.Content>
                            </Button><br/>
                            <input
                                type="file"
                                id="file"
                                hidden
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