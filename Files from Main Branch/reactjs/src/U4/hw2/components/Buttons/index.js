import React from 'react';
import Button from './Button';

export default function Buttons({ children }) {
    return <div className="btn-grid">{children}</div>;
}

export { Button };
