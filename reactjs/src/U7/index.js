import React from 'react';
import GithubPage from './hw4';
import { Provider } from 'react-redux';
import configureStore from './redux/store';

const store = configureStore();

const U7 = () => {
    return (
        <Provider store={store}>
            <GithubPage />
        </Provider>
    );
};

export default U7;
