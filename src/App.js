import { useContext, useState } from 'react'
import SideDrawer from './components/sideDrawer/SideDrawer'
import Toolbar from './components/header/Header'
import MainMenu from './components/MainMenu'
import { PlayerContext } from './components/context/PlayerContextProvider'
import MainPlayer from './components/mainPlayer/MainPlayer'
import SmallPlayer from './components/smallPlayer/SmallPlayer'

import './css/App.css'
import Routes from './routes/Routes'

function App() {

  const { currentSong, showMainPlayer } = useContext(PlayerContext)
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
        <Routes />
      </div>
      {currentSong !== null && (
        <>
          {!showMainPlayer && <SmallPlayer />}
          <MainPlayer />
        </>
      )}
    </>
  )
}

export default App
