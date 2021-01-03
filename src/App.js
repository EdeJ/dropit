import { useState } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import SideDrawer from './components/sideDrawer/SideDrawer';
import Toolbar from './components/toolbar/Toolbar';
import Player from './components/player/Player';
import Home from './pages/Home';
import Login from './pages/Login';
import MyDemos from './pages/MyDemos';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import AddDemo from './pages/AddDemo';
import MyProfile from './pages/MyProfile';

import './App.css';
import MenuLinks from './components/MenuLinks';
import WriteComment from './pages/WriteComment';
import ViewComment from './pages/ViewComment';
import EditComment from './pages/EditComment';

// export const ACTIONS = {
//   PLAY: 'play',
//   PAUSE: 'pause',
//   STOP: 'stop'
// }


function App() {

  const mainLinks = [{ path: '/sign-up', label: 'Sign up' },
  { path: '/sign-in', label: 'Sign in' },
  { path: '/my-demos', label: 'My demos' },
  { path: '/add-new-demo', label: 'Add new demo' },
  { path: '/my-profile', label: 'My profile' },
  { path: '/sign-out', label: 'Sign out' }
  ]

  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  const [showPlayer, setShowPlayer] = useState(true);
  const [currentSong, setCurrentSong] = useState();
  const [showMainPlayer, setShowMainPlayer] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // const drawerToggleClickHandler = () => {
  //   setSideDrawerOpen(!sideDrawerOpen);
  // }

  // const backdropClickHandler = () => {
  //   setSideDrawerOpen(false);
  // }

  return (
    <>
      <div className="app" style={{ height: '100%' }}>
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
          <Route path="/my-demos">
            <MyDemos
              currentSong={currentSong}
              setCurrentSong={setCurrentSong}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              showMainPlayer={showMainPlayer}
              setShowMainPlayer={setShowMainPlayer}
            />
          </Route>
          <Route path="/add-new-demo">
            <AddDemo />
          </Route>
          <Route path="/my-profile">
            <MyProfile />
          </Route>
          <Route path="/login">
            <Login />
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
        </Switch>
      </div>
      {currentSong && (
        <Player
          currentSong={currentSong}
          setCurrentSong={setCurrentSong}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          showMainPlayer={showMainPlayer}
          setShowMainPlayer={setShowMainPlayer}
        />
      )}
    </>
  )
}

export default App;
