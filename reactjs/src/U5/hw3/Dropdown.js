import React from 'react'
import { Link } from 'react-router-dom'

const Dropdown = ({
    components = [],
    handleClick = () => {},
    label = '',
    type = ''
}) => {
    return (
        <div className="dropdown">
            <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                {label}
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                {components.map((component, idx) => {
                    return (
                        <li key={idx}>
                            {type === 'component' && (
                                <Link to={`/${idx}`} className="dropdown-item">
                                    {component}
                                </Link>
                            )}
                            {type === 'color' && (
                                <p
                                    className="dropdown-item"
                                    onClick={handleClick(idx)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    {component}
                                </p>
                            )}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Dropdown
