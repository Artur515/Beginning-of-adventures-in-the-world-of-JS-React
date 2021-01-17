import style from './headerStyle.module.css'
import {Link} from "react-router-dom";
import {Button} from "semantic-ui-react";


const Header = () => {

    return (
        <div className={style.header}>
            <Link to="./auth">
                <Button  basic inverted type='submit'>Sing In</Button>
            </Link>
            <Link to="./registration">
                <Button  basic inverted type='submit'>Sign up</Button>
            </Link>
        </div>
    )


}

export default Header