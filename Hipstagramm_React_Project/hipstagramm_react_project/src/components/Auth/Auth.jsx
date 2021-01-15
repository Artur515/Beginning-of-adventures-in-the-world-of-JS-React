import styles from './authStyle.module.css'
import {authContent} from "../../static";
import {Button} from "semantic-ui-react";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {useForm} from "react-hook-form";


let schema = yup.object().shape({
    email: yup.string().required('Please enter email').email(),
    password: yup.string().required().min(6),
});




const Auth = () => {
    const {register, handleSubmit, errors} = useForm({
        resolver: yupResolver(schema)
    })
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div className={styles.form} >
            <h1>Hipstagramm</h1>
            <form  onSubmit={handleSubmit(onSubmit)}>
                {authContent.inputs.map((input, key) => {
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



// const Auth = () => {
//     return (
//
//         // <div className={styles.forms}>
//         //     <div className='auth'>
//         //         <h3>Sing in</h3>
//         //         <form>
//         //             <div>
//         //                 <input type="`text`"
//         //                        name='login'
//         //                        autoComplete='off'
//         //                        placeholder='E-mail'
//         //                        spellCheck={false}
//         //                        className={styles.input}/>
//         //
//         //             </div>
//         //             <div>
//         //                 <input className={styles.input} type="password" name='password' placeholder='Password'/>
//         //             </div>
//         //             <div>
//         //                 <button>Sing in</button>
//         //             </div>
//         //         </form>
//         //     </div>
//         // </div>
//     )
// }

export default Auth