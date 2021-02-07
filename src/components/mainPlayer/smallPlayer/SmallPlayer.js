import React, { useContext } from 'react'
// import ReactAudioPlayer from 'react-audio-player'
// import AudioPlayer from 'react-h5-audio-player'
import { IoPlaySharp, IoPauseSharp } from 'react-icons/io5'
import { PlayerContext } from '../../context/PlayerContextProvider'
// import songs from '../../../assets/audio/songs.json'
// import AudioSpectrum from 'react-audio-spectrum'
import 'react-h5-audio-player/lib/styles.css'
// import { useHistory } from 'react-router-dom'

function SmallPlayer() {

    const { currentSong, setShowMainPlayer, isPlaying, play, pause } = useContext(PlayerContext)

    // const [index, setIndex] = useState(0)
    // const history = useHistory()


    // function previous() {
    //     if (index > 0) {
    //         setCurrentSong(songs[index - 1])
    //     }
    // }

    // function next() {
    //     if (index < songs.length - 1) {
    //         setCurrentSong(songs[index + 1])
    //     }
    // }

    function playHandler() {
        isPlaying ? pause() : play()
    }

    return (
        <div className="sticky-player">
            <div
                // history.push('/music-player')

                className="container">
                {currentSong && (
                    <div
                        className="song-details"
                        onClick={() => setShowMainPlayer(true)}
                        style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
                    >
                        <strong>{currentSong.songTitle}</strong>
                        <p>{currentSong.artist}</p>
                    </div>
                )}
                <button onClick={playHandler}
                    type="button">
                    {isPlaying ? <IoPauseSharp /> : <IoPlaySharp />}
                </button>
            </div>

        </div>
    )
}

export default SmallPlayer
