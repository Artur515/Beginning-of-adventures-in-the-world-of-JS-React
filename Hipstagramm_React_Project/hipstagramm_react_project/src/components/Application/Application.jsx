import React from 'react'
import Registration from "../Registration/Rgistration";
import Auth from "../Auth/Auth";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "../Home/Home";


const Application = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route exact path="/auth">
                        <Auth/>
                    </Route>
                    <Route exact path="/registration">
                        <Registration/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>


// <Grid>
//     <Grid.Column mobile={16} tablet={8} computer={4}>
//         <div className={style.wrapper}>
//             <Registration/>
//             {/*<Auth/>*/}
//         </div>
//     </Grid.Column>
// </Grid>
    )
}

export default Application