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

function App() {

  const { currentSong } = useContext(PlayerContext)

  const mainLinks = [{ path: '/sign-up', label: 'Sign up' },
  { path: '/sign-in', label: 'Sign in' },
  { path: '/my-demos', label: 'My demos' },
  { path: '/add-new-demo', label: 'Add new demo' },
  { path: '/my-profile', label: 'My profile' }
  ]


  const [sideDrawerOpen, setSideDrawerOpen] = useState(false)
  const [showPlayer, setShowPlayer] = useState(true)
  // const [currentSong, setCurrentSong] = useState()
  // const [showMainPlayer, setShowMainPlayer] = useState(false)
  // const [isPlaying, setIsPlaying] = useState(false)
  const [isAdmin, setIsAdmin] = useState(true)

  return (
    <>
      <div className="app" style={{ height: '100%' }}>V5
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
          <PrivateRoute path="/my-demos">
            <MyDemos />
          </PrivateRoute>
          <Route path="/add-new-demo">
            <AddDemo />
          </Route>
          <Route path="/my-profile">
            <MyProfile />
          </Route>
          <Route path="/write-comment/:songId">
            <WriteComment />
          </Route>
          <Route path="/view-comment/:songId">
            <ViewComment />
          </Route>
          <Route path="/edit-comment/:songId">
            <EditComment />
          </Route>
          <Route path="/demo-options/:songId">
            <DemoOptions />
          </Route>
        </Switch>
      </div>
      {currentSong && (
        <Player />
      )}
    </>
  )
}

export default App
