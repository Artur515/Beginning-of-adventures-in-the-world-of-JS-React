import styleApp from './App.module.css';
import Application from './components/Application/Application'
import 'semantic-ui-css/semantic.min.css'
import {BrowserRouter} from "react-router-dom";

const App = () => {
    return (<div className={styleApp.App}>
        <BrowserRouter>

                <Application/>

        </BrowserRouter>
    </div>);
}

export default App;
