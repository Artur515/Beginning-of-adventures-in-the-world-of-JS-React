import {Button, Grid, Image, Input, Segment} from "semantic-ui-react";
import style from './style.module.css'

const Setting = () => {
    return (
        <div>
            <Grid columns={2} stackable className={style.div}>
                <Grid.Row stretched>
                    <Grid.Column>
                        <Segment className={style.first_segment}><Image
                            src='https://react.semantic-ui.com/images/wireframe/square-image.png' size='small'
                            circular/><br/>
                            <Button className={style.button}>Change photo</Button><br/>
                            <label>Login</label>
                            <Input size='large' placeholder='Login'/>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment className={style.first_segment}>
                            <label htmlFor="">First name</label>
                            <Input size='large' labelPosition='left' placeholder='Enter first name'
                                   className={style.input}/>
                            <label htmlFor="">Last name</label>
                            <Input size='large' placeholder='Enter last name' className={style.input}/>
                            <label htmlFor="">Email</label>
                            <Input size='large' placeholder='Enter email' className={style.input}/>
                        </Segment>

                    </Grid.Column>
                </Grid.Row>

                <Grid.Column width={16}>
                    <Segment><Button size='large'  color='black'>Save profile</Button> </Segment>
                    <Segment className={style.third_segment}>
                        <div className={style.input_password}>
                            <label htmlFor="">Password</label>
                            <Input size='large' placeholder='Search...'/>
                        </div>
                        <div className={style.input_password}>
                            <label htmlFor="">Confirm password</label>
                            <Input size='large' placeholder='Search...'/>
                        </div>
                    </Segment>
                    <Segment><Button  color='black' size='large'>Save password</Button></Segment>
                </Grid.Column>
            </Grid>
        </div>
    )
}


export default Setting