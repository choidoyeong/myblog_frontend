import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <Link className="logo" to="/">Doyeong Blog</Link>    
        </div>
    );
}

export default Header;