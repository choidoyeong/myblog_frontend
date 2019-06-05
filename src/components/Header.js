import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = ({login, changeLogin}) => {    

    const logout = () => {
        sessionStorage.removeItem('username')
        sessionStorage.removeItem('user_id')
        sessionStorage.removeItem('access')
        localStorage.removeItem('refresh')
        changeLogin(false)
    }

    return (
        <div className="header">
            <div className="logo-wrapper">
                <Link className="logo" to="/">Doyeong Blog</Link>
            </div>
            <div className={`login-wrapper${login ? ' logined ' : ''}`}>
                <Link className="login" to="/login">Log In</Link>
                <Link className="signup" to="/signup">Sign Up</Link>
            </div>
            <div className={`user-wrapper${login ? ' user': ''}`}>
                {sessionStorage.getItem('username')} 님
                <div className="logout" onClick={logout} > Log Out</div>
            </div>
        </div>
    );
}

export default Header;