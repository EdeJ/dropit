import React from 'react'
import { NavLink } from 'react-router-dom'

function MenuLinks({ backdropClickHandler }) {
    return (
        <ul>
            <li onClick={backdropClickHandler} ><NavLink to="/sign-up">Sign up</NavLink></li>
            <li onClick={backdropClickHandler} ><NavLink to="/sign-in">Sign in</NavLink></li>
            <li onClick={backdropClickHandler} ><NavLink to="/my-demos">My demos</NavLink></li>
            <li onClick={backdropClickHandler} ><NavLink to="/add-new-demo">Add new demo</NavLink></li>
            <li onClick={backdropClickHandler} ><NavLink to="/my-profile">My profile</NavLink></li>
            <li onClick={backdropClickHandler} ><NavLink to="/sign-out">Sign out</NavLink></li>
        </ul>
    )
}

export default MenuLinks
