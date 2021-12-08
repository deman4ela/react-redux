import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import { createStore, compose, applyMiddleware } from 'redux'
import appReducer from './redux/reducer'
import createSagaMiddleware from 'redux-saga';
import rootSagaWatcher from './redux/saga/rootSaga'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(appReducer, compose(applyMiddleware(sagaMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() ));

sagaMiddleware.run(rootSagaWatcher);

ReactDOM.render(
<Provider store={store}> 
    <App /> 
</Provider>, 
    document.getElementById('main')
    )
