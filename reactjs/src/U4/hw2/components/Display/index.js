import React from 'react';
import './style.css';

export default function Display({ value = '0' }) {
    return <input type="text" readOnly className="display" value={value} />;
}
