import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import configureStore from './redux/store'
import GithubPage from './hw4'
import DataCombine from './hw5'
import Timer from './hw1'

const store = configureStore()

const Entry = () => {
    return (
        <ul>
            <li>
                <Link to="/github">github page</Link>
            </li>
            <li>
                <Link to="/data-combine">data combine page</Link>
            </li>
            <li>
                <Link to="/timer">timer page</Link>
            </li>
        </ul>
    )
}

const U7 = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Entry />} />
                    <Route path="/github" element={<GithubPage />} />
                    <Route path="/data-combine" element={<DataCombine />} />
                    <Route path="/timer" element={<Timer />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}

export default U7
