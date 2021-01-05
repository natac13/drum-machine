import React, { useState } from 'react'
import { Key } from '../types/drum'
import DrumPad from './DrumPad'
import { useStaticQuery, graphql } from 'gatsby'
import {
  DrumMachineQuery,
  SoundsYamlGroup2,
  SoundsYamlGroup1,
} from '../types/generated-gatsby'
import { DEFAULT_VOLUME } from '../constants'
import PowerButton from './PowerButton'
import Display from './Display'
import SoundSelect from './SoundSelect'

interface Props {}

const DrumMachine: React.FC<Props> = (props: Props) => {
  const [volume, setVolume] = useState(DEFAULT_VOLUME)

  const data: DrumMachineQuery = useStaticQuery(graphql`
    query DrumMachine {
      soundsYaml {
        group1 {
          __typename
          id
          keyCode
          keyTrigger
          url
        }
        group2 {
          __typename
          id
          keyCode
          keyTrigger
          url
        }
      }
    }
  `)

  const group1 = data?.soundsYaml?.group1 as SoundsYamlGroup1[]
  const group2 = data?.soundsYaml?.group2 as SoundsYamlGroup2[]

  const [currentSounds, setCurrentSounds] = useState<
    (SoundsYamlGroup1 | SoundsYamlGroup2)[]
  >(group1)
  const [power, setPower] = useState(true)
  const [display, setDisplay] = useState('')
  const handleSoundSelect = (group: number) => {
    if (group === 1) {
      setCurrentSounds(group1)
    } else if (group === 2) {
      setCurrentSounds(group2)
    }
  }

  return (
    <section
      id="drum-machine"
      className="flex flex-col w-full max-w-3xl px-2 m-auto bg-gray-300 md:flex-row md:w-full h-auto py-4"
    >
      <div
        id="drum-pads"
        className="w-full p-4 md:w-1/2 grid place-items-center grid-cols-3 grid-rows-3 gap-4"
      >
        {currentSounds &&
          currentSounds?.map((sound) => (
            <DrumPad
              keyTrigger={(sound?.keyTrigger as Key) ?? 'Q'}
              keyCode={sound.keyCode}
              id={sound?.id ?? ''}
              audioClip={sound?.url ?? ''}
              volume={volume}
              power={power}
              setDisplay={setDisplay}
            />
          ))}
      </div>
      <div id="controls" className="flex flex-col md:w-1/2 gap-4">
        <PowerButton
          power={power}
          setPower={setPower}
          setDisplay={setDisplay}
        />
        <Display display={display} power={power} />
        {/* <Volume /> */}
        <SoundSelect
          currentSounds={currentSounds}
          handleSoundSelect={handleSoundSelect}
          setDisplay={setDisplay}
          power={power}
        />
      </div>
    </section>
  )
}

export default DrumMachine
