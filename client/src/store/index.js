import {applyMiddleware, createStore} from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk'; // Me permite el manejo de las rutas al servidor

const store = createStore(
    reducer, 
    //window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
    );

export default store;