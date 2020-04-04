import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <ul className="nav">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about-me">About Me</Link>
            </li>
            <li>
                <Link to="/work-experience">Work Experience</Link>
            </li>
            <li>
                <Link to="/sandbox">Sandbox</Link>
            </li>
        </ul>
    )
}

export default Navigation;