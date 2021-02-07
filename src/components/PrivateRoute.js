import { Route, Redirect } from "react-router-dom"
import { useAuthentication } from "../hooks/authentication"

function PrivateRoute({ children, permittedRoles, ...rest }) {

    const { user } = useAuthentication()

    let isAllowed = false

    if (user) {
        user.roles.forEach(role => {
            if (permittedRoles.includes(role)) {
                isAllowed = true
            }
        })
    }

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
