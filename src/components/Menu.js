import React from 'react';
import '../styles/_menuBar.scss'

const Menu = () => {
    return (
        <div className="menu">
            <div className="burger">
                <div className="burger-top"></div>
                <div className="burger-mid"></div>
                <div className="burger-bot"></div>
                <h3>Menu</h3>
            </div>
        </div>
    );
};

export default Menu;