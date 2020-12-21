import Backdrop from './components/Backdrop/Backdrop';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Toolbar from './components/Toolbar/Toolbar';
import Header from './components/Header';
import Player from './components/Player/Player';

import './App.css';
import { useState } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import { Route, Switch, useLocation } from 'react-router-dom';
import MyDemos from './pages/MyDemos';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import AddDemo from './pages/AddDemo';
import MyProfile from './pages/MyProfile';

function App() {

  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  }

  const backdropClickHandler = () => {
    setSideDrawerOpen(false);
  }


  return (
    <div style={{ height: '100%' }}>
      <Toolbar drawerToggleClickHandler={drawerToggleClickHandler} />
      <SideDrawer show={sideDrawerOpen} backdropClickHandler={backdropClickHandler} />
      {/* {sideDrawerOpen && <Backdrop backdropClickHandler={backdropClickHandler} />} */}
      <main style={{ marginTop: '64px' }}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <Route path="/sign-in">
            <SignIn />
          </Route>
          <Route path="/my-demos">
            <MyDemos />
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
      </main>
      <Player />
    </div>
  )
}

export default App;
