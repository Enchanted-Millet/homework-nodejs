import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import News from './News'
import Photos from './Photos'

const StaticNews = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<News />} />
                <Route path="/photo" element={<Photos />} />
            </Routes>
        </BrowserRouter>
    )
}

export default StaticNews
