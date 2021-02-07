import React from 'react'
import styles from './MenuPanel.module.css'

function MenuPanel({ children }) {
    return (
        <ul className={styles['menu-panel']}>
            {children}
        </ul>
    )
}

export default MenuPanel
