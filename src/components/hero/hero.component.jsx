import React from 'react';
import "./hero.styles.scss";


import logo from '../../assets/logo.png'

const Hero = ({ imgurl, title, subtitle, text }) => {
    return (
        <div className="hero">
            <div className="content">
                <div className="title">
                Affordable Coding Classes
                </div>
                <div className="subtitle">
              <h3>  Develop your programming skills with a live online course 
taught by india's best students.
</h3>
                </div>
                <div className="contact-button">
                <div className="option-button option">
                Contact Us
                </div>
                </div>
            </div>

            <div className="hero-img">
                <img src={logo} alt="hero img"/>
            </div>
        </div>
    );
}

export default Hero;
