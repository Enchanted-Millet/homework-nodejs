import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import News from './News';
import Photos from './Photos';

const StaticNews = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<News />} />
                <Route path="/photo" element={<Photos />} />
            </Routes>
        </BrowserRouter>
    );
};

export default StaticNews;
