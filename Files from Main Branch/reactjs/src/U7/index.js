import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import GithubPage from './hw4';
import DataCombine from './hw5';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const store = configureStore();

const Entry = () => {
    return (
        <ul>
            <li>
                <Link to="/github">github page</Link>
            </li>
            <li>
                <Link to="/data-combine">data combine page</Link>
            </li>
        </ul>
    );
};

const U7 = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Entry />} />
                    <Route path="/github" element={<GithubPage />} />
                    <Route path="/data-combine" element={<DataCombine />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
};

export default U7;
