import React from 'react';
import '../styles/Nav.css';
// import { Link } from 'react-router-dom';


const Nav = () => {
    return (
        <nav className="parent-nav-container">
            <div className="title">
                <h1 className="app-title">Task App</h1>
            </div>

            <div className="link-container">
                <div>
                    <a href="/about" className="link">About</a>
                </div>
            </div>
        </nav>
    );
}

export default Nav;