import styles from './registrationStyle.module.css'
import {Button} from "semantic-ui-react";

const handleClick=(e)=>{
    e.preventDefault()
}
const Registration = () => {
    return (
        <div className={styles.forms}>
            <h3>Sing Up</h3>
            <form>
                <input type="text" placeholder="Enter your name" className={styles.input}/>
                <input type="text"
                       name='login'
                       autoComplete='off'
                       placeholder='E-mail'
                       spellCheck={false}
                       className={styles.input}
                />
                <input className={styles.input} type="password" name='password' placeholder='Password'/>
                <input className={styles.input} type="password" name='password' placeholder='Repead password'/>

<div className={styles.btn}>
    <Button onClick={handleClick}  basic inverted>Sing Up</Button>
</div>


            </form>


        </div>
    )
}

export default Registration