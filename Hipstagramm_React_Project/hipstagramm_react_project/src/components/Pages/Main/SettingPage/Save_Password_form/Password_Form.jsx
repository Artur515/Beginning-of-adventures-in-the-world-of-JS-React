import {Button, Icon, Segment} from "semantic-ui-react";
import style from "../style.module.css";
import React, {useRef} from "react";
import {useForm} from 'react-hook-form';


const Password = () => {


    const {register, handleSubmit, errors, watch} = useForm({});
    const password = useRef({});
    password.current = watch("password", "");//наблюдаем за первым input

    console.log(errors)


    const onSubmit = (data) => {
        console.log(data)
        const {password, confirm_password} = data

    }

    return (
        <Segment>
            <form className={style.form_password} onSubmit={handleSubmit(onSubmit)}>
                <div className={style.form_div}>
                    <div className={style.div_input}>
                        <label>Password</label>
                        <input name='password' type='password' placeholder='Password'
                               className={style.input}
                               ref={register({
                                   required: "You must specify a password",
                                   minLength: {
                                       value: 8,
                                       message: "Password must have at least 8 characters"
                                   }
                               })}/>
                        {errors.password && <p className={style.p}>{errors.password.message}</p>}
                    </div>
                    <div className={style.div_input}>
                        <label>Confirm Password</label>
                        <input name='confirm_password' type='password' placeholder='Confirm password' ref={register({
                            validate: value =>
                                value === password.current || "The passwords do not match"
                        })}
                               className={style.input}/>
                        {errors.confirm_password && <p className={style.p}>{errors.confirm_password.message}</p>}
                    </div>
                </div>

                <Button animated secondary>
                    <Button.Content visible>Save password</Button.Content>
                    <Button.Content hidden>
                        <Icon name=' save'/>
                    </Button.Content>
                </Button>
            </form>
        </Segment>
    )
}


export default Password