import React from 'react'
import './MyDemos.css';

function MyDemos({ setShowPlayer }) {
    return (
        <div>
            <h3>My Demos</h3>
            <div className="demo-list">
                <ul>
                    <li onClick={() => setShowPlayer(true)}>a</li>
                    <li>a</li>
                    <li>a</li>
                    <li>a</li>
                    <li>a</li>
                    <li>a</li>
                    <li>a</li>
                    <li>a</li>
                    <li>a</li>
                </ul>
            </div>
        </div>
    )
}

export default MyDemos
