import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
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

// export const ACTIONS = {
//   PLAY: 'play',
//   PAUSE: 'pause',
//   STOP: 'stop'
// }


function App() {

  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  const [showPlayer, setShowPlayer] = useState(true);
  const [currentSong, setCurrentSong] = useState();
  const [showMainPlayer, setShowMainPlayer] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  }

  const backdropClickHandler = () => {
    setSideDrawerOpen(false);
  }

  return (
    <>
      <div className="app" style={{ height: '100%' }}>
        <Toolbar drawerToggleClickHandler={drawerToggleClickHandler} backdropClickHandler={backdropClickHandler} />
        <SideDrawer show={sideDrawerOpen} backdropClickHandler={backdropClickHandler} />
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
