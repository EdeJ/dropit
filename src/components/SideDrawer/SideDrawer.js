import React from 'react';
import { ReactComponent as CloseIcon } from '../../assets/close-icon.svg';
import './SideDrawer.css';

function SideDrawer({ show, backdropClickHandler }) {

    let drawerClasses = 'side-drawer';

    if (show) {
        drawerClasses = 'side-drawer open';
    }

    return (
        <nav className={drawerClasses}>
            <button onClick={backdropClickHandler} type="button"><CloseIcon /></button>
            <ul>
                <li><a href="/">Products</a></li>
                <li><a href="/">Users</a></li>
                <li><a href="/">Products</a></li>
                <li><a href="/">Users</a></li>
                <li><a href="/">Products</a></li>
                <li><a href="/">Users</a></li>
            </ul>
        </nav>
    )
}

export default SideDrawer;
