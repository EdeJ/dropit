import { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom"
import { useAuthentication } from "../hooks/authentication"


function PrivateRoute({ children, permittedRoles, ...rest }) {

    const { user } = useAuthentication()

    let isAllowed = false

    console.log("isAuthenticated: ", user)

    if (user) {
        user.roles.forEach(role => {
            console.log('user.roles: ', role)
            if (permittedRoles.includes(role)) {
                isAllowed = true
            }
        });

        // isAllowed = user.roles.reduce((boolean, role) => {
        //     return permittedRoles.includes(role)
        // })
        console.log("ROLE isAllowed: ", isAllowed)
    }

    // setIsAllowed(isAllowed)


    return (
        <>
            <Route
                {...rest}
                render={({ location }) =>
                    isAllowed ? (children) : (
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
