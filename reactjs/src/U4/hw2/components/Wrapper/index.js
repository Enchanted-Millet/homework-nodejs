import React from 'react';
import './style.css';

export default function Wrapper({ children }) {
    return <div className="calc-container">{children}</div>;
}
