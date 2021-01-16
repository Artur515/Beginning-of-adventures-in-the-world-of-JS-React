import styles from './registrationStyle.module.css'
import {Button} from "semantic-ui-react";
import {registrationContent} from '../../static'
import {useForm} from "react-hook-form";
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

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

        <div className={styles.form}>
            <h1>Hipstagramm</h1>
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
            </form>
        </div>

    )
}


export default Registration