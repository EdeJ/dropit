import React from 'react'
import style from './Button.module.css'

function Button({ label, color, onClick }) {

    return (
        <button
            className={`${style.customButton} ${style[color]}`}
            type="button"
            onClick={onClick}
        >
            {label}
        </button>
    )
}

export default Button
