import { useContext, useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import SideDrawer from './components/sideDrawer/SideDrawer'
import Toolbar from './components/toolbar/Toolbar'
import Player from './components/player/Player'
import MenuLinks from './components/MenuLinks'
import Home from './pages/Home'
import MyDemos from './pages/MyDemos'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import AddDemo from './pages/AddDemo'
import MyProfile from './pages/MyProfile'
import WriteComment from './pages/WriteComment'
import ViewComment from './pages/ViewComment'
import EditComment from './pages/EditComment'
import DemoOptions from './pages/DemoOptions'
import { PlayerContext } from './components/context/PlayerContextProvider'
import PrivateRoute from './components/PrivateRoute'

import './App.css'
import AllDemos from './pages/AllDemos'
import { roles } from './helpers/roles'
import MainPlayer from './components/mainPlayer/MainPlayer'
import { useAuthentication } from './hooks/authentication'

function App() {

  const { user, isAdmin } = useAuthentication()
  const { currentSong, setShowPlayer, showMainPlayer } = useContext(PlayerContext)

  const [mainLinks, setMainLinks] = useState([
    { path: '/sign-up', label: 'Sign up' },
    { path: '/sign-in', label: 'Sign in' },
    { path: '/my-demos', label: 'My demos' },
    { path: '/add-new-demo', label: 'Add new demo' },
    { path: '/my-profile', label: 'My profile' }
  ]);

  useEffect(() => {
    if (isAdmin()) {
      setMainLinks([
        { path: '/sign-up', label: 'Sign up' },
        { path: '/sign-in', label: 'Sign in' },
        { path: '/all-demos', label: 'All demos' },
        { path: '/my-profile', label: 'My profile' }
      ])
    } else {
      setMainLinks(
        [
          { path: '/sign-up', label: 'Sign up' },
          { path: '/sign-in', label: 'Sign in' },
          { path: '/my-demos', label: 'My demos' },
          { path: '/add-new-demo', label: 'Add new demo' },
          { path: '/my-profile', label: 'My profile' }
        ])

    }
  }, [isAdmin])



  const [sideDrawerOpen, setSideDrawerOpen] = useState(false)

  return (
    <>
      <div className="app" >
        <Toolbar
          sideDrawerOpen={sideDrawerOpen}
          setSideDrawerOpen={setSideDrawerOpen}
        >
          {/* // TODO maak hier een hoofdmenu van die intern zelf regeld of het links voor ADMIN of voor USER moet zijn */}
          <MenuLinks links={mainLinks} setSideDrawerOpen={setSideDrawerOpen} />
        </Toolbar>
        <SideDrawer
          sideDrawerOpen={sideDrawerOpen}
          setSideDrawerOpen={setSideDrawerOpen}
        >
          <MenuLinks links={mainLinks} setSideDrawerOpen={setSideDrawerOpen} />
        </SideDrawer>
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
          <PrivateRoute path="/view-comment/:songId" permittedRoles={[roles.USER]}>
            <ViewComment />
          </PrivateRoute>
          <Route path="/edit-comment/:songId">
            <EditComment />
          </Route>
          <Route path="/demo-options/:songId">
            <DemoOptions />
          </Route>
        </Switch>
      </div>
      {currentSong !== null && (
        <>
          {!showMainPlayer && <Player />}
          <MainPlayer />
        </>
      )}
    </>
  )
}

export default App
