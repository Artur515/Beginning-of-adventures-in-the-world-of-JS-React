import styles from "./registrationStyle.module.css";
import { registrationContent } from "../static";
import { Button } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registration } from "../../../../../actions/auth/action";

let schema = yup.object().shape({
    name: yup.string().required(),
    password: yup.string().required().min(6),
    email: yup.string().required("Please enter email").email(),
});

const Registration = (props) => {
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });

    const [successful, setSuccessful] = useState(false);
    const dispatch = useDispatch();
    const { message } = useSelector((state) => state.message);

    const onSubmit = (data) => {
        console.log(data);
        const { name, email, password } = data;
        setSuccessful(false);
        if ((name, email, password)) {
            dispatch(registration(name, email, password))
                .then(() => {
                    props.history.push("/auth/login");
                    window.location.reload();
                    setSuccessful(true);
                })
                .catch(() => {
                    setSuccessful(false);
                });
        }
    };

    return (
        <div className={styles.main}>
            <Link to="/">
                <h1>Hipstagramm</h1>
            </Link>
            <div className={styles.form}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {registrationContent.inputs.map((input, key) => {
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
                    <Button basic inverted>
                        Submit
                    </Button>
                    <div className={styles.link}>
                        If you have account you can{" "}
                        <Link to="/auth/login">
                            <h4>Login</h4>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Registration;
