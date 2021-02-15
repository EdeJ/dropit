import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './LinkButtonStyle.module.css'

function LinkButtonStyle({ children, url, border = true }) {
    return (
        <NavLink
            className={`${styles['btn-style']} ${border ? styles['border'] : ''}`}
            to={url} >
            {children
            }</NavLink>
    )
}

export default LinkButtonStyle
