import React from 'react';
import { ReactComponent as CloseIcon } from '../../assets/images/close-icon.svg';
import './SideDrawer.css';

function SideDrawer({ sideDrawerOpen, setSideDrawerOpen, children }) {

    return (
        <nav className={`side-drawer ${sideDrawerOpen ? 'open' : ''}`}>
            <button
                className="close-btn"
                onClick={() => setSideDrawerOpen(false)}
                type="button">
                <CloseIcon />
            </button>
            {children}
        </nav>
    )
}

export default SideDrawer
