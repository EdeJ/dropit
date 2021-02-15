import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/images/logo.svg'
import { useAuthentication } from '../../hooks/authentication'
import { roles } from '../../helpers/roles'
import { IoMenu, IoPersonCircleOutline } from 'react-icons/io5'

import styles from './Header.module.css'

function Header({ sideDrawerOpen, setSideDrawerOpen, children }) {

    const { user } = useAuthentication()

    function getColor() {
        return user.roles.includes(roles.ADMIN) ? '#CB2431' : '#69BA5E'
    }

    return (
        <header className={styles['header']}>
            <nav className={styles['navigation']}>
                <div className={styles['logo']} >
                    <Link to="/">
                        <Logo title="dropit" />
                    </Link>
                </div>
                <div className={styles['header-buttons']}>
                    {user && (
                        <Link to="/my-profile">
                            <IoPersonCircleOutline
                                className={styles['profile-icon']}
                                color={getColor()}
                            />
                        </Link>
                    )}
                    <IoMenu
                        className={styles['toggle-menu-btn']}
                        onClick={() => setSideDrawerOpen(!sideDrawerOpen)}
                    />
                </div>
                <div className={styles['items']}>
                    {children}
                </div>
            </nav>
        </header>
    )
}

export default Header
