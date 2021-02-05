import {Button, Grid, Image, Input, Segment} from "semantic-ui-react";
import style from './style.module.css'

const Setting = () => {
    return (
        <div>
            <Grid columns={2} stackable>
                <Grid.Row stretched>
                    <Grid.Column>
                        <Segment className={style.first_segment}><Image
                            src='https://react.semantic-ui.com/images/wireframe/square-image.png' size='small'
                            circular/><br/>
                            <Button>Change photo</Button><br/>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment>
                            <form className={style.form}>
                                <label>Login</label>
                                <Input type='text' placeholder='Login' className={style.input}/>
                                <label>First name</label>
                                <Input type='text' placeholder='First name' className={style.input}/>
                                <label>Last name</label>
                                <Input type='text' placeholder='Last name' className={style.input}/>
                                <label>Email</label>
                                <Input type='email' placeholder='Email' className={style.input}/>
                                <Button>Save profile</Button>
                            </form>
                        </Segment>

                    </Grid.Column>
                </Grid.Row>
                <Grid.Column width={16}>
                    <Segment>
                        <form className={style.form_password}>
                            <div className={style.form_div}>
                                <div className={style.div_input}>
                                    <label>Password</label>
                                    <Input type='password' placeholder='Password'/>
                                </div>
                                <div className={style.div_input}>
                                    <label>Confirm Password</label>
                                    <Input type='password' placeholder='Password'/>
                                </div>
                            </div>
                            <Button>Save password</Button>
                        </form>
                    </Segment>

                </Grid.Column>
            </Grid>
        </div>
    )
}


export default Setting