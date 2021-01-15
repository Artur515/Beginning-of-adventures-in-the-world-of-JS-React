import styleApp from './App.module.css';
import Application from './components/Application/Application'
import 'semantic-ui-css/semantic.min.css'
import {Provider} from "react-redux";
import store from './store'

const App = () => {
    return (<div className={styleApp.App}>
        <Provider store={store}>
            <Application/>
        </Provider>
    </div>);
}

export default App;
