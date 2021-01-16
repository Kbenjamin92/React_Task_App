import React from 'react';
import '../styles/Nav.css';


const Nav = () => {
    return (
        <nav className="parent-nav-container">
            <div className="title">
                <h1 className="app-title">Kipp's <span className="nav-title-decoration">Task App</span></h1>
            </div>
        </nav>
    );
}

export default Nav;