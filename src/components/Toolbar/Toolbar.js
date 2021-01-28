import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import DrawerToggleButton from '../sideDrawer/DrawerToggleButton'
import { ReactComponent as Logo } from '../../assets/images/logo.svg'
import './Toolbar.css'
import { useAuthentication } from '../../hooks/authentication'
import { getUser } from '../../functions/helperFunctions'

function Toolbar({ sideDrawerOpen, setSideDrawerOpen, children }) {

    const { user, isAdmin, isAuthenticated } = useAuthentication()


    useEffect(() => {

        getData()
        async function getData() {
            const newUser = await getUser()
            console.log('newUser', newUser);
        }

    }, [])

    return (
        <header className="toolbar">
            <>
                {user ? <p>{user.username} is logged in</p> : <p>NO USER</p>}
                {isAdmin ? <p>ROLE = isAdmin</p> : <p>ROLE = USER</p>}
            </>
            <nav className="toolbar-navigation">
                <div className="toolbar-logo" >
                    {/* {location.pathname !== '/' && ( */}
                    <Link to={isAuthenticated ? 'my-demos' : '/'}>
                        <Logo title="dropit" />
                    </Link>
                    {/* )} */}
                    {isAdmin && <h5>ADMIN</h5>}
                </div>
                <div className="toggle-button">
                    <DrawerToggleButton setSideDrawerOpen={() => setSideDrawerOpen(!sideDrawerOpen)} />
                </div>
                {/* <div className="spacer"></div> */}
                <div className="toolbar-navigation-items">
                    {/* <MenuLinks backdropClickHandler={backdropClickHandler} /> */}
                    <ul>                    {children}</ul>

                </div>
            </nav>
        </header>
    )
}

export default Toolbar
