import React, { useContext } from 'react'
import songs from '../assets/audio/songs'
import './MyDemos.css'
import SongCard from '../components/SongCard';
import { PlayerContext } from '../components/context/PlayerContextProvider';


function MyDemos() {

    const { currentSong, showMainPlayer } = useContext(PlayerContext);

    return (
        <div className="full-page">
            <h3>My Demos</h3>
            <div className="demo-list">
                <ul className={showMainPlayer ? 'overlay' : ''}>
                    {songs.map(song => (
                        <li key={song.id}>
                            <SongCard
                                song={song}
                                // isSelected={song === currentSong}
                                size={{ width: 144, height: 144 }}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default MyDemos
