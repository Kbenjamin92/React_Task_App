import React from 'react';
import '../styles/Footer.css'
import github from '../svg/github.svg'
import linkedin from '../svg/linkedin.svg'
import twitter from '../svg/twitter.png'




const Footer = () => {
    let getDate = new Date()
    let year = getDate.getFullYear()
   
    return (
        <footer className='footer-container'>
            <h3 className='footer-txt'>Thank you for using my task app!</h3>
            <p>&#169; {year} Kipp Benjamin</p>
            <a href="https://github.com/Kbenjamin92" target="_blank" rel="noopener noreferrer"><img src={github} className="icon" alt="github"/></a>
            <a href="https://www.linkedin.com/in/kipp-benjamin-524681155/" target="_blank" rel="noopener noreferrer"><img src={linkedin} className="icon" alt="linkedin" /></a>
            <a href="https://twitter.com/benjamin_kipp" target="_blank" rel="noopener noreferrer"><img src={twitter} className="icon" alt="linkedin" /></a>


        </footer>
    );
}

export default Footer;