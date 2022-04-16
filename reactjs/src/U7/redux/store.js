import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import monitorReducerEnhancer from './middlewares/monitorReducer';
import loggerMiddleware from './middlewares/logger';
import rootReducer from './reducers';

export default function configureStore(preloadedState) {
    // const middlewares = [loggerMiddleware, thunkMiddleware];
    const middlewares = [thunkMiddleware];
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const enhancers = composeEnhancers(applyMiddleware(...middlewares), monitorReducerEnhancer);

    return createStore(rootReducer, preloadedState, enhancers);
}
