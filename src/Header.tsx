// Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import "./App.css"

function Header() {
    return (
        <header>
            <h1>My Website</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/characters">Character Gallery</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
