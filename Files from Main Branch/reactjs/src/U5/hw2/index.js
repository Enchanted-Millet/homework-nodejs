import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Users from './Users';
import UserDetail from './UserDetail';

const GitHubPage = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users" element={<Users />} />
                <Route path="/users/:login" element={<UserDetail />} />
            </Routes>
        </BrowserRouter>
    );
};

export default GitHubPage;
