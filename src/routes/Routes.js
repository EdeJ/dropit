import React, { useContext } from 'react'
import { Route, Switch } from 'react-router-dom'
import { PlayerContext } from '../components/context/PlayerContextProvider'
import PrivateRoute from '../components/PrivateRoute'
import { roles } from '../helpers/roles'
import AddDemo from '../pages/myDemos/AddDemo'
import DemoOptions from '../pages/demoOptions/DemoOptions'
import MyProfile from '../pages/myProfile/MyProfile'
import AllDemos from '../pages/myDemos/AllDemos'
import MyDemos from '../pages/myDemos/MyDemos'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import WriteComment from '../pages/comments/WriteComment'
import ViewComment from '../pages/comments/ViewComment'
import EditComment from '../pages/comments/EditComment'
import Home from '../pages/home/Home'


function Routes() {

    const { setShowPlayer } = useContext(PlayerContext)

    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/sign-up">
                <SignUp setShowPlayer={setShowPlayer} />
            </Route>
            <Route path="/sign-in">
                <SignIn />
            </Route>
            <PrivateRoute path="/my-demos" permittedRoles={[roles.USER]}>
                <MyDemos />
            </PrivateRoute>
            <PrivateRoute path="/all-demos" permittedRoles={[roles.ADMIN]}>
                <AllDemos />
            </PrivateRoute>
            <PrivateRoute path="/add-new-demo" permittedRoles={[roles.USER]}>
                <AddDemo />
            </PrivateRoute>
            <PrivateRoute path="/my-profile" permittedRoles={[roles.USER, roles.ADMIN]}>
                <MyProfile />
            </PrivateRoute>
            <PrivateRoute path="/write-comment/:songId" permittedRoles={[roles.ADMIN]}>
                <WriteComment />
            </PrivateRoute>
            <PrivateRoute path="/view-comment/:songId" permittedRoles={[roles.USER, roles.ADMIN]}>
                <ViewComment />
            </PrivateRoute>
            <PrivateRoute path="/edit-comment/:songId" permittedRoles={[roles.ADMIN]} >
                <EditComment />
            </PrivateRoute>
            <PrivateRoute path="/demo-options/:songId" permittedRoles={[roles.USER, roles.ADMIN]}>
                <DemoOptions />
            </PrivateRoute>
            <Route path="/reset">
                {localStorage.removeItem('user')}
            </Route>
        </Switch>
    )
}

export default Routes
