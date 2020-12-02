import React from 'react';
import "./header.styles.scss"

const Header = () => {
    return (

        <div className="header">

            <div className="logo-container">
                SUPERIOR
                <span style={ {color: "#007AFF" }
                }>CODINGS</span>
            </div>


            <div className="options">
                <div className="option">Courses</div>
                <div className="option">About Us</div> 
                <div className="option-button option">
                Contact Us
                </div>
            </div>
        </div>
    );
}

export default Header;
