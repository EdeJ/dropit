import React from 'react';

import './DrawerToggleButton.css';

function DrawerToggleButton({ drawerToggleClickHandler }) {
    return (
        <button type="button" className="toggle-button" onClick={drawerToggleClickHandler}>
            <div className="toggle-button-line"></div>
            <div className="toggle-button-line"></div>
            <div className="toggle-button-line"></div>
        </button>
    )
}

export default DrawerToggleButton;
