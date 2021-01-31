import React, { useContext } from 'react'
import AudioSpectrum from 'react-audio-spectrum'
import { PlayerContext } from './context/PlayerContextProvider'

function AudioVisualizer() {

    const { audio } = useContext(PlayerContext)

    return (
        <AudioSpectrum
            height={200}
            width={300}
            audioEle={audio.current}
            meterWidth={10}
            gap={2}
            capColor={''}
            meterColor={[
                { stop: 0, color: '#69BA5E' },
                { stop: 0.5, color: '#69BA5E' },
            ]}
        />
    )
}

export default AudioVisualizer
