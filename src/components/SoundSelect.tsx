import React from 'react'
import { SoundsYamlGroup2, SoundsYamlGroup1 } from '../types/generated-gatsby'

interface Props {
  currentSounds: (SoundsYamlGroup1 | SoundsYamlGroup2)[]
  handleSoundSelect: (group: number) => void
  setDisplay: (str: string) => void
  power: boolean
}

const SoundSelect: React.FC<Props> = (props: Props) => {
  const { currentSounds, handleSoundSelect, setDisplay, power } = props

  return (
    <section id="sound-select" className="flex gap-4">
      <button
        onClick={() => {
          handleSoundSelect(1)
          setDisplay('Heater Sounds')
        }}
        disabled={!power}
        className={`${power ? '' : 'opacity-50 cursor-default'} ${
          currentSounds[0].__typename === 'SoundsYamlGroup1'
            ? 'bg-blue-600 text-white'
            : 'line-through'
        } py-4 px-8 bg-gray-50 text-black rounded-md shadow-xl`}
      >
        Heater Sounds
      </button>
      <button
        onClick={() => {
          handleSoundSelect(2)
          setDisplay('Piano Sounds')
        }}
        disabled={!power}
        className={`${power ? '' : 'opacity-50 cursor-default'} ${
          currentSounds[0].__typename === 'SoundsYamlGroup2'
            ? 'bg-blue-600 text-white'
            : 'line-through'
        } px-8 py-4 bg-gray-50 text-black rounded-md shadow-xl`}
      >
        Piano Sounds
      </button>
    </section>
  )
}

export default SoundSelect
