import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as CloseIcon } from '../../assets/close-icon.svg';
import './SideDrawer.css';

function SideDrawer({ show, backdropClickHandler }) {

    return (
        <nav className={`side-drawer ${show ? 'open' : ''}`}>
            <button onClick={backdropClickHandler} type="button"><CloseIcon /></button>
            <ul>
                <li onClick={backdropClickHandler} ><NavLink to="/sign-up">Sign up</NavLink></li>
                <li onClick={backdropClickHandler} ><NavLink to="/sign-in">Sign in</NavLink></li>
                <li onClick={backdropClickHandler} ><NavLink to="/my-demos">My demos</NavLink></li>
                <li onClick={backdropClickHandler} ><NavLink to="/add-new-demo">Add new demo</NavLink></li>
                <li onClick={backdropClickHandler} ><NavLink to="/my-profile">My profile</NavLink></li>
                <li onClick={backdropClickHandler} ><NavLink to="/sign-out">Sign out</NavLink></li>
            </ul>
        </nav>
    )
}

export default SideDrawer;
