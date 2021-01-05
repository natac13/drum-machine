import React, { useCallback, useRef, useEffect, useState } from 'react'
import { Key } from '../types/drum'
import { DEFAULT_VOLUME } from '../constants'

interface Props {
  audioClip?: string
  id?: string
  keyTrigger?: Key
  volume?: number
  power: boolean
  setDisplay: React.Dispatch<React.SetStateAction<string>>
  keyCode?: number
}

const DrumPad: React.FC<Props> = (props: Props) => {
  const id = props.id ?? ''
  const keyTrigger = props.keyTrigger
  const volume = props.volume ?? DEFAULT_VOLUME
  const power = props.power
  const setDisplay = props.setDisplay
  const keyCode = props.keyCode
  const buttonRef = useRef<HTMLButtonElement | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [active, setActive] = useState(false)

  const playSound = useCallback(() => {
    if (!power) {
      return false
    } else if (audioRef.current) {
      setActive(true)
      setDisplay(id)
      setTimeout(() => setActive(false), 100)
      buttonRef?.current?.focus()
      audioRef.current.currentTime = 0
      audioRef.current.play()
    }
  }, [power, audioRef, id, setDisplay])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
    }
  }, [audioRef, volume])

  const handleKeyPress = useCallback(
    (ev: KeyboardEvent) => {
      if (ev.code === `Key${keyTrigger}`) {
        // if (ev.keyCode === keyCode) {
        playSound()
      }
    },
    [playSound, keyTrigger, keyCode]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress)

    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  })

  return (
    <button
      ref={buttonRef}
      className={`drum-pad focus:outline-none focus:ring-blue-300 ring-4 ring-gray-700 shadow-lg grid place-items-center rounded-xl w-full h-16 md:h-full ${
        active ? 'bg-yellow-500' : 'bg-gray-600'
      } ${power ? '' : 'opacity-50 cursor-default'}`}
      onClick={playSound}
      disabled={!power}
      id={props.id}
    >
      <audio
        ref={audioRef}
        src={props.audioClip}
        id={keyTrigger}
        className="clip"
      ></audio>
      <p className="text-xl text-white">{props.keyTrigger}</p>
    </button>
  )
}

export default DrumPad
