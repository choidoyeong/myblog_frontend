import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <div className="logo-wrapper">
                <Link className="logo" to="/">Doyeong Blog</Link>
            </div> 
        </div>
    );
}

export default Header;