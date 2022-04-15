import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import monitorReducerEnhancer from './middlewares/monitorReducer';
import loggerMiddleware from './middlewares/logger';
import rootReducer from './reducers';

export default function configureStore(preloadedState) {
    const middlewares = [loggerMiddleware, thunkMiddleware];
    const middlewareEnhancer = applyMiddleware(...middlewares);

    const enhancers = [middlewareEnhancer, monitorReducerEnhancer];
    const composedEnhancers = compose(...enhancers);

    return createStore(rootReducer, preloadedState, composedEnhancers);
}
