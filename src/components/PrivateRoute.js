import { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom"
import { useAuthentication } from "../hooks/authentication"


function PrivateRoute({ children, ...rest }) {
    const { adminOnly } = rest;


    const { isAuthenticated, isAdmin } = useAuthentication()
    const [isAllowed, setIsAllowed] = useState(false)

    console.log("adminOnly: ", adminOnly);
    console.log("isAdmin: ", isAdmin);

    useEffect(() => {
        let isAllowed = false
        if (isAuthenticated) {
            isAllowed = true
        }
        if (adminOnly) {
            if (adminOnly !== isAdmin) {
                isAllowed = false
            }
        }
        setIsAllowed(isAllowed)
    }, [])

    return (
        <>
            {isAllowed ? <h1>isAllowed!</h1> : <h1>NOT ALLOWED</h1>}
            <Route
                {...rest}
                render={({ location }) =>
                    isAuthenticated ? (children) : (
                        <Redirect
                            to={{
                                pathname: "/sign-in",
                                state: { from: location }
                            }}
                        />
                    )
                }
            />
        </>)
}

export default PrivateRoute
