import React from 'react';
import '../styles/Header.css'
import man from '../svg/manWithPhone.png'


const Header = () => {
    return (
        <header className="parent-header-container">
            <div>
                <img src={man} alt="man" className="header-img"/>
            </div>
            <p className="header-txt">List daily tasks and agenda with Task App!</p>
        </header>
    );
}

export default Header;