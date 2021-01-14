import styles from './authStyle.module.css'

const Auth = () => {
    return (
        <div className={styles.forms}>
            <div className='auth'>
                <h3>Sing in</h3>
                <form>
                    <div>
                        <input type="`text`"
                               name='login'
                               autoComplete='off'
                               placeholder='E-mail'
                               spellCheck={false}
                               className={styles.input}/>

                    </div>
                    <div>
                        <input className={styles.input} type="password" name='password' placeholder='Password'/>
                    </div>
                    <div>
                        <button>Sing in</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Auth