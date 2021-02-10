import { Route, Redirect } from "react-router-dom"
import { useAuthentication } from "../hooks/authentication"

function PrivateRoute({ children, permittedRoles, ...rest }) {

    const { user } = useAuthentication()

    let freeAccess = false

    if (user) {
        user.roles.forEach(role => {
            if (permittedRoles.includes(role)) {
                freeAccess = true
            }
        })
    }

    return (
        <Route
            {...rest}
            render={({ location }) =>
                freeAccess ? (children) : (
                    <Redirect
                        to={{
                            pathname: "/sign-in",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    )
}

export default PrivateRoute
