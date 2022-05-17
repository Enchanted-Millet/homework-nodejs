import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <ul className="nav justify-content-center">
            <nav className="nav-item">
                <Link className="nav-link active" to="/">
                    News
                </Link>
            </nav>
            <li className="nav-item">
                <Link className="nav-link" to="/photo">
                    Photos
                </Link>
            </li>
        </ul>
    );
}
