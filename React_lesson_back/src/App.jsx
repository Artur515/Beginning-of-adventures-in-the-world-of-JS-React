import "./App.css";
import React, { useState } from "react";
import { getTokenFromLS } from "./services/localStorage";
import Auth from "./components/Auth";
import Quotes from "./components/Quotes";

const App = () => {
    const [isAuth, setIsAuth] = useState(!!getTokenFromLS());
    return isAuth ? <Quotes /> : <Auth />;
};

export default App;
