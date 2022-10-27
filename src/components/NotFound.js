import React from 'react';
import { Link } from 'react-router-dom';
import './MasterComponentsCss.css';

const NotFound = () => {
    return (
        <div className='not-found'>
            <h1>404, Not Found!</h1>
            <Link to={'/'}>Go To Home</Link>
        </div>
    );
};

export default NotFound;