import {Button, Grid, Icon, Segment} from "semantic-ui-react";
import style from "../style.module.css";
import React, {useState} from "react";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";

//schema.yup по прикольнее будет


let schema = yup.object().shape({
    login: yup.string().required().min(2, 'Login is too short!').max(20, 'Login is too long!'),
    firstName: yup.string().required().min(2, 'First name is too short!').max(20, 'First name is too long!'),
    lastName: yup.string().required().min(2, 'Last name is too short!').max(20, 'Last name is too long!'),
    email: yup.string().required("Please enter email").email(),
});


const Profile_form = ({imageUser, defaulAvatar}) => {

    console.log(imageUser.imagePreview)
    const {register, handleSubmit, errors} = useForm({
        resolver: yupResolver(schema),
    });


    const onSubmit = (data) => {
        console.log(data)
        const {login, firstName, lastName, email} = data
        const requestBody = {
            login: login,
            firstName: firstName,
            lastName: lastName,
            email: email,
            avatar: imageUser.imagePreview || defaulAvatar
        }


    }

    return (
        <Segment className={style.second_segment}>
            <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
                <label>Login</label>
                <input type='text' name='login' placeholder='Login' className={style.input} ref={register}/>
                <div className={style.p}>
                    {errors.login?.message}
                </div>
                <label>First name</label>
                <input type='text' placeholder='First name' name='firstName' className={style.input} ref={register}/>
                <div className={style.p}>
                    {errors.first_name?.message}
                </div>
                <label>Last name</label>
                <input type='text' placeholder='Last name' name='lastName' className={style.input} ref={register}/>
                <div className={style.p}>
                    {errors.last_name?.message}
                </div>
                <label>Email</label>
                <input type='email' placeholder='Email' name='email' className={style.input} ref={register}/>
                <div className={style.p}>
                    {errors.email?.message}
                </div>
                <Button animated secondary>
                    <Button.Content visible>Save profile</Button.Content>
                    <Button.Content hidden>
                        <Icon name=' save'/>
                    </Button.Content>
                </Button>
            </form>
        </Segment>
    )
}

export default Profile_form