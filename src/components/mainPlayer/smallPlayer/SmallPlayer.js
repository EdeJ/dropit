import React, { useContext, useEffect, useRef, useState } from 'react'
import ReactAudioPlayer from 'react-audio-player'
import AudioPlayer from 'react-h5-audio-player'
import { IoPlaySharp, IoPauseSharp } from 'react-icons/io5'
import { PlayerContext } from '../../context/PlayerContextProvider'
import songs from '../../../assets/audio/songs.json'
import AudioSpectrum from 'react-audio-spectrum'
import 'react-h5-audio-player/lib/styles.css'

function SmallPlayer() {

    const { currentSong, setCurrentSong, setShowMainPlayer, isPlaying, setIsPlaying, play, pause } = useContext(PlayerContext)

    const [index, setIndex] = useState(0);

    // useEffect(() => {
    //     isPlaying ? audio.play() : audio.pause()
    // }, [isPlaying])


    function previous() {
        if (index > 0) {
            setCurrentSong(songs[index - 1]);
        }
    }

    function next() {
        if (index < songs.length - 1) {
            setCurrentSong(songs[index + 1]);
        }
    }

    return (
        <div className="sticky-player">
            <div
                // onClick={() => setShowMainPlayer(true)}
                className="container">
                {currentSong && (
                    <div className="song-details">
                        <strong>{currentSong.songTitle}</strong>
                        <p>{currentSong.artist}</p>
                    </div>
                )}
                <button onClick={play}
                    type="button">
                    {isPlaying ? <IoPauseSharp /> : <IoPlaySharp />}
                </button>
                {/* <audio ref={audio}> */}
                {/* <source src={`${process.env.REACT_APP_BASE_URL}api/files/${currentSong.fileName}`} type="audio/mpeg" /> */}
                {/* </audio> */}
                {/* <div>
                    <AudioSpectrum
                        id="audio-canvas"
                        height={200}
                        width={100}
                        audioEle={audio.current}
                        meterWidth={10}
                        gap={2}
                        capColor={''}
                        meterColor={[
                            { stop: 0, color: '#69BA5E' },
                            { stop: 0.5, color: '#69BA5E' },
                            // { stop: 1, color: 'red' }
                        ]}
                    />
                </div> */}

                {/* {currentSong && (
                    <AudioPlayer style={{ background: 'none' }}
                        ref={player}
                        autoPlay
                        src={currentSong.fileName}
                        onPlay={e => console.log("onPlay")}
                        showSkipControls={true}
                        showJumpControls={false}
                        showDownloadProgress={true}
                        autoPlayAfterSrcChange={true}
                        onClickPrevious={previous}
                        onClickNext={next}
                        layout='stacked-reverse'
                    />
                )} */}

            </div>

        </div>
    )
}

export default SmallPlayer
