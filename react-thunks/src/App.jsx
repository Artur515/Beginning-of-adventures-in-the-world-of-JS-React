import './App.css';
import store from './store';
import {Provider} from 'react-redux';
import Application from './components/Application';

const App = () => {
  return (
    <Provider store={store}>
          <Application/>
    </Provider>
  );
}

export default App;
