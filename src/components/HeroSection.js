import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../images/hero-img.png';

const HeroSection = () => {
    return (
        <div className="hero-section">
            <div className="inner-hero-section">
                <div className="left-hero">
                    <h1>Learn IOT Skills Online With Our Best <span className='green-color-text'>iotAcademy</span></h1>
                    <p>Build skills with courses, guidelines, and degrees online from
                    world-class iotAcademy. </p>
                    <Link to={'/courses'}>Explore Courses</Link>
                    <div className="bottom-blop">
                        <li>Over 11k students</li>
                        <li>More than 100 courses</li>
                        <li>Lear effectivly online</li>
                    </div>
                </div>
                <div className="right-hero">
                    <img src={heroImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;