import styleApp from './App.module.css';
import Application from './components/Application/Application'
import 'semantic-ui-css/semantic.min.css'
import {Provider} from "react-redux";
import store from './store'
import {BrowserRouter} from "react-router-dom";

const App = () => {
    return (<div className={styleApp.App}>
        <BrowserRouter>
            <Provider store={store}>
                <Application/>
            </Provider>
        </BrowserRouter>
    </div>);
}

export default App;
