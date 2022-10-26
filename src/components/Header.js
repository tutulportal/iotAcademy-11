import React from 'react';
import logo from '../logo.png';
import { Link } from 'react-router-dom';
import './MasterComponentsCss.css';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';

const Header = () => {
    const [darkMode, setDarkMode] = useState(false);

    const handleDarkMode = () => setDarkMode(!darkMode);

    return (
        <div className='header-bar'>
            <div className="inner-header-bar">
                <div className="logo">
                    <Link to='/'><img src={logo} alt={logo} /></Link>
                </div>
                <nav className='menu'>
                    <li><Link to={'/home'}>Home</Link></li>
                    <li><Link to={'/courses'}>Courses</Link></li>
                    <li><Link to={'/faq'}>FAQ</Link></li>
                    <li><Link to={'/blog'}>Blog</Link></li>
                </nav>
                <div className="side-extra-menu">
                    <span className='modes'>
                        {
                            darkMode ? <SunIcon onClick={handleDarkMode} title="Click to make Light Mode" height="24px"/> : <MoonIcon onClick={handleDarkMode} title="Click to make Dark Mode" height="24px"/>
                        }
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Header;