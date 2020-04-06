import React from 'react';
import logo from '../../images/facebook.png'
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <nav>
                <h1><img src={logo} alt=""/></h1>
                <a href="">Home</a>
                <a href="">Timeline</a>
                <a href="">Newsfeed</a>
            </nav>
        </div>
    );
};

export default Header;