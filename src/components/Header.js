import React from 'react';
import logo from '../logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="logo">
                <img src={logo} alt={logo} />
            </div>
            <nav className='menu'>
                <li><Link to={'/home'}>Home</Link></li>
                <li><Link to={'/courses'}>Courses</Link></li>
                <li><Link to={'/faq'}>FAQ</Link></li>
                <li><Link to={'/blog'}>Blog</Link></li>
            </nav>
            <div className="side-extra-menu">

            </div>
        </div>
    );
};

export default Header;