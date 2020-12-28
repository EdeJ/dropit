import React from 'react'
import './MyDemos.css';

function MyDemos({ setShowPlayer }) {
    return (
        <div>
            <h3>My Demos</h3>
            <div className="demo-list">
                <ul>
                    <li onClick={() => setShowPlayer(true)}>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                    <li>8</li>
                    <li>9</li>
                </ul>
            </div>
        </div>
    )
}

export default MyDemos
