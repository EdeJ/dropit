import { useContext, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import SideDrawer from './components/sideDrawer/SideDrawer'
import Toolbar from './components/toolbar/Toolbar'
import Player from './components/player/Player'
import MainMenu from './components/MainMenu'
import Home from './pages/Home'

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
import AllDemos from './pages/myDemos/AllDemos'
import { roles } from './helpers/roles'
import MainPlayer from './components/mainPlayer/MainPlayer'

import './App.css'
import MyDemos from './pages/myDemos/MyDemos'

function App() {

  const { currentSong, setShowPlayer, showMainPlayer } = useContext(PlayerContext)
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false)

  return (
    <>
      <div className="app" >
        <Toolbar
          sideDrawerOpen={sideDrawerOpen}
          setSideDrawerOpen={setSideDrawerOpen}
        >
          <MainMenu setSideDrawerOpen={setSideDrawerOpen} />
        </Toolbar>
        <SideDrawer
          sideDrawerOpen={sideDrawerOpen}
          setSideDrawerOpen={setSideDrawerOpen}
        >
          <MainMenu setSideDrawerOpen={setSideDrawerOpen} />
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
          <PrivateRoute path="/view-comment/:songId" permittedRoles={[roles.USER, roles.ADMIN]}>
            <ViewComment />
          </PrivateRoute>
          <PrivateRoute path="/edit-comment/:songId" permittedRoles={[roles.ADMIN]} >
            <EditComment />
          </PrivateRoute>
          <PrivateRoute path="/demo-options/:songId" permittedRoles={[roles.USER, roles.ADMIN]}>
            <DemoOptions />
          </PrivateRoute>
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
