import { useContext, useState } from 'react'
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
import MusicPlayer from './pages/MusicPlayer'
import MainPlayer from './components/mainPlayer/MainPlayer'
import AudioVisualizer from './components/AudioVisualizer'

function App() {

  const { currentSong, setShowPlayer, showMainPlayer } = useContext(PlayerContext)

  const mainLinks = [{ path: '/sign-up', label: 'Sign up' },
  { path: '/sign-in', label: 'Sign in' },
  { path: '/my-demos', label: 'My demos' },
  { path: '/all-demos', label: 'All demos' },
  { path: '/add-new-demo', label: 'Add new demo' },
  { path: '/music-player', label: 'Music Player' },
  { path: '/my-profile', label: 'My profile' }
  ]

  const [sideDrawerOpen, setSideDrawerOpen] = useState(false)

  return (
    <>
      <div className="app" >
        <Toolbar
          sideDrawerOpen={sideDrawerOpen}
          setSideDrawerOpen={setSideDrawerOpen}
        >
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
          <PrivateRoute path="/write-comment/:songId" permittedRoles={[roles.USER]}>
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
          {/* <Route path="/music-player">
            <MusicPlayer />
          </Route> */}
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
