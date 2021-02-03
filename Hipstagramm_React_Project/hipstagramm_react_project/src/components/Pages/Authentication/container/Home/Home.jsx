import style from './homeStyle.module.css'
import Header from "./HomeHeader/Header";


const Home = () => {
    return (
        <div className={style.main}>
            <div className={style.head}>
                <h1> Hipstargram</h1>
                <Header/>
            </div>
        </div>
    )
}

export default Home














