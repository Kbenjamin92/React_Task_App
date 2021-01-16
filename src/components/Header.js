import React from 'react';
import '../styles/Header.css'
import man from '../svg/manWithPhone.png'
import Typical from 'react-typical';


const Header = () => {
   
    return (
        <header className="parent-header-container">
            <div>
                <img src={man} alt="man" className="header-img"/>
            </div>
            
            <div className="header-title-container">
                <h3 className="header-title">Use Kipp's <span className="task-app-txt">Task App</span> to organize your productivity!</h3>
            </div>
           
            <div className="header-sub-container">
                <p className="header-sub">List daily tasks and agendas with Kipp's Task App!</p>
            </div>  
        </header>
    );
}

export default Header;