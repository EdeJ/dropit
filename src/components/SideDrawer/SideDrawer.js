import React from 'react';
import { ReactComponent as CloseIcon } from '../../assets/close-icon.svg';
import './SideDrawer.css';

function SideDrawer({ show }) {

    let drawerClasses = 'side-drawer';

    if (show) {
        drawerClasses = 'side-drawer open';
    }

    return (
        <nav className={drawerClasses}>
            <button type="button"><CloseIcon /></button>
            <ul>
                <li><a href="/">Products</a></li>
                <li><a href="/">Users</a></li>
            </ul>
        </nav>
    )
}

export default SideDrawer;
