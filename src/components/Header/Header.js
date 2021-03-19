import React from 'react';
import './Header.css'

const Header = () => {
    return (
        
            <header>
                <div className="toggle-bar">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </div>
                <div className="block-location">
                    <p>myENV</p>
                    <span>Singapore</span>
                </div>
                <div className="block-icon">
                    <img src="./../bell.png" />
                </div>
            </header>
    )
}

export default Header