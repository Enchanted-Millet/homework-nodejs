import React from 'react';
import './style.scss';

export default function Layout() {
    const buttons = new Array(20).fill(0).map((_, i) => {
        return (
            <button className="icon" key={i}>
                {i + 1}
            </button>
        );
    });

    return (
        <div className="iphone">
            <div className="screen">
                <header>status bar</header>
                <main>{buttons.map(button => button)}</main>
            </div>
        </div>
    );
}
