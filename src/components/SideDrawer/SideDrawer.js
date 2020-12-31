import React from 'react';
import { ReactComponent as CloseIcon } from '../../assets/images/close-icon.svg';
import MenuLinks from '../MenuLinks';
import './SideDrawer.css';

function SideDrawer({ show, backdropClickHandler }) {

    return (
        <nav className={`side-drawer ${show ? 'open' : ''}`}>
            <button onClick={backdropClickHandler} type="button"><CloseIcon /></button>
            <MenuLinks backdropClickHandler={backdropClickHandler} />
        </nav>
    )
}

export default SideDrawer
