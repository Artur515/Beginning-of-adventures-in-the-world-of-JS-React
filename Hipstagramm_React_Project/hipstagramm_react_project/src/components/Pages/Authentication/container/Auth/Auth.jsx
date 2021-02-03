import styles from "./authStyle.module.css";
import {authContent} from "../static";
import {Button, Loader} from "semantic-ui-react";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../../../../actions/auth/action";
import React, {useState} from "react";
import {Redirect} from "react-router-dom";

let schema = yup.object().shape({
    name: yup.string().required(),
    password: yup.string().required().min(6),
});


const Auth = (props) => {


    const {register, handleSubmit, errors} = useForm({
        resolver: yupResolver(schema)
    });
    ///надо добавить loader
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const {isLoggedIn} = useSelector((state) => state.auth);
    const {message} = useSelector((state) => state.message);

    const onSubmit = (data) => {
        console.log(data)
        const {name, password} = data

        setLoading(true)
        if (name, password) {
            dispatch(login(name, password))
                .then(() => {
                    props.history.push('/users/current')
                    window.location.reload()
                })
                .catch(() => {
                    setLoading(false)
                })
        } else {
            setLoading(false)
        }
    };
    if (isLoggedIn) {
        return <Redirect to="/users/current"/>
    }


    return (
        <div className={styles.main}>
            <Link to="/">
                <h1>Hipstagramm</h1>
            </Link>
            <div className={styles.form}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {authContent.inputs.map((input, key) => {
                        return (
                            <div key={key}>
                                <div>
                                    <label className={styles.input}>
                                        {input.label}
                                    </label>
                                </div>
                                <div>
                                    <input
                                        className={styles.input}
                                        name={input.name}
                                        type={input.type}
                                        ref={register}
                                    />
                                </div>
                                <p className={styles.p}>
                                    {errors[input.name]?.message}
                                </p>
                            </div>
                        );
                    })}
                    <Button basic inverted disabled={loading}>
                        Submit
                    </Button>
                    {loading && <Loader active inline='centered'/>}
                </form>
                <div>
                    If you not have account you can
                    <Link to="/auth/registration">
                        <h4>Registration</h4>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Auth;
