import React from 'react';
import logo from '../logo.png';
import { Link, useNavigate } from 'react-router-dom';
import './MasterComponentsCss.css';
import { MoonIcon, SunIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { useState, useContext } from 'react';
import { AuthContext } from './../contexts/auth.context';

const Header = () => {
    const navigate = useNavigate();
    const [darkMode, setDarkMode] = useState(false);
    const {user, logOut} = useContext(AuthContext);
    const handleDarkMode = () => setDarkMode(!darkMode);
    const [mobileMenu, setMobileMenu] = useState(false);

    const handleLogOut = () =>{
        logOut()
        .then(() =>{
            navigate('/login');
        });
    };

    const handleMobileMenu = () =>{
        setMobileMenu(!mobileMenu);
    }

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
                    {
                        user ? <span className='logout-and-profile'><button onClick={handleLogOut} className='login-btn' >Logout</button> <span className='profile-icon'><img src={user.photoURL} alt="" /></span><span className='user-name-on-hover'><p>{user.displayName}</p></span></span> : <Link className='login-btn' to={'/login'}>Login</Link>
                    }
                    <span className='modes'>
                        {
                            darkMode ? <SunIcon onClick={handleDarkMode} title="Click to make Light Mode" height="24px"/> : <><MoonIcon className='desktopMoon' onClick={handleDarkMode} title="Click to make Dark Mode" height="24px"/> {mobileMenu ? <XMarkIcon onClick={handleMobileMenu} className='mobileIcon' title="Click to make Dark Mode" height="30px"/> : <Bars3BottomRightIcon onClick={handleMobileMenu} className='mobileIcon' title="Click to make Dark Mode" height="30px"/>}</>
                        }
                    </span>
                </div>
            </div>
            <div className={`mobile-menu ${mobileMenu ? 'active' : ''}`}>
                <li><Link to={'/home'}>Home</Link></li>
                <li><Link to={'/courses'}>Courses</Link></li>
                <li><Link to={'/faq'}>FAQ</Link></li>
                <li><Link to={'/blog'}>Blog</Link></li>
            </div>
        </div>
    );
};

export default Header;