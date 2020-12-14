import Backdrop from './components/Backdrop/Backdrop';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Toolbar from './components/Toolbar/Toolbar';
import Header from './components/Header';
import Player from './components/Player/Player';

import './App.css';
import { useState } from 'react';

function App() {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  }

  const backdropClickHandler = () => {
    // console.log('close');
    setSideDrawerOpen(false);
  }


  return (
    <div style={{ height: '100%' }}>
      <Toolbar drawerToggleClickHandler={drawerToggleClickHandler} />
      <SideDrawer show={sideDrawerOpen} backdropClickHandler={backdropClickHandler} />
      {/* {sideDrawerOpen && <Backdrop backdropClickHandler={backdropClickHandler} />} */}
      <main style={{ marginTop: '64px' }}>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus odit esse a totam odio nemo. Incidunt, iusto minima labore cumque repudiandae vel saepe officia est eligendi ab, perferendis earum voluptates sunt, omnis ratione? Velit obcaecati exercitationem fugiat itaque, dolorum natus harum quibusdam a vero excepturi quaerat aspernatur, iste, molestias veniam deserunt sed blanditiis iure vitae necessitatibus molestiae nemo illum? Ut fugit sapiente odit dolores ipsa. Officia at aliquam quibusdam itaque ullam, tenetur ducimus possimus adipisci ea quam natus quasi inventore nesciunt deleniti sint atque laborum, debitis dolorum veritatis sed. Deserunt cum possimus tempore asperiores, ipsum consequatur dolorem in! Accusantium, animi.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus odit esse a totam odio nemo. Incidunt, iusto minima labore cumque repudiandae vel saepe officia est eligendi ab, perferendis earum voluptates sunt, omnis ratione? Velit obcaecati exercitationem fugiat itaque, dolorum natus harum quibusdam a vero excepturi quaerat aspernatur, iste, molestias veniam deserunt sed blanditiis iure vitae necessitatibus molestiae nemo illum? Ut fugit sapiente odit dolores ipsa. Officia at aliquam quibusdam itaque ullam, tenetur ducimus possimus adipisci ea quam natus quasi inventore nesciunt deleniti sint atque laborum, debitis dolorum veritatis sed. Deserunt cum possimus tempore asperiores, ipsum consequatur dolorem in! Accusantium, animi.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus odit esse a totam odio nemo. Incidunt, iusto minima labore cumque repudiandae vel saepe officia est eligendi ab, perferendis earum voluptates sunt, omnis ratione? Velit obcaecati exercitationem fugiat itaque, dolorum natus harum quibusdam a vero excepturi quaerat aspernatur, iste, molestias veniam deserunt sed blanditiis iure vitae necessitatibus molestiae nemo illum? Ut fugit sapiente odit dolores ipsa. Officia at aliquam quibusdam itaque ullam, tenetur ducimus possimus adipisci ea quam natus quasi inventore nesciunt deleniti sint atque laborum, debitis dolorum veritatis sed. Deserunt cum possimus tempore asperiores, ipsum consequatur dolorem in! Accusantium, animi.</p>

      </main>
      <Player />
    </div>
  )
}

export default App;
