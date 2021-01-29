import React from 'react'
import { NavLink } from 'react-router-dom'
import './Home.css'

function Home() {

    return (
        <div className="container-center">
            <h2>"Now Give Me A Beat!"</h2>
            <div className="action-btns">
                <NavLink type="button" to="/sign-in" >Sign In</NavLink>
                <NavLink className="border" type="button" to="/sign-up" >Sign Up</NavLink>
            </div>
            <ul>
                <li>Send your demo</li>
                <li>Get feedback from Don Diablo</li>
                <li>Change the history of music...</li>
            </ul>
        </div>
    )
}

export default Home 
