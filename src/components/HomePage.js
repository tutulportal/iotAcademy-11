import React from 'react';
import './MasterComponentsCss.css';
import HeroSection from './HeroSection';

const HomePage = () => {
    return (
        <div className='home-wrapper'>
            <HeroSection></HeroSection>
        </div>
    );
};

export default HomePage;