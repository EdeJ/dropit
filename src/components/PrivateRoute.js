import { Route, Redirect } from "react-router-dom"
import { useAuthentication } from "../hooks/authentication"


function PrivateRoute({ children, ...rest }) {

    const { isAuthenticated } = useAuthentication()

    return (
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
    )
}

export default PrivateRoute
