import styles from './registrationStyle.module.css'
import {Button} from "semantic-ui-react";
import {registrationContent} from '../../static'
import {useForm} from "react-hook-form";
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {Link} from "react-router-dom";

let schema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required().min(6),
    email: yup.string().required('Please enter email').email(),
});


const Registration = () => {
    const {register, handleSubmit, errors} = useForm({
        resolver: yupResolver(schema)
    })
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div className={styles.main}>
            <h1>Hipstagramm</h1>
            <div className={styles.form}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {registrationContent.inputs.map((input, key) => {
                        return <div key={key}>
                            <div>
                                <label className={styles.input}>{input.label}</label>
                            </div>
                            <div>
                                <input className={styles.input} name={input.name} type={input.type} ref={register}/>
                            </div>
                            <p className={styles.p}>{errors[input.name]?.message}</p>
                        </div>
                    })}
                    <Button basic inverted type='submit'>Submit</Button>
                    <div className={styles.link}>
                        If you have account you can <Link to="./auth"><h4>Login</h4> </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default Registration