import React from 'react';
import './style.css';

export default function Button({ className, value, onClick }) {
    return (
        <button className={className} onClick={onClick}>
            {value}
        </button>
    );
}
