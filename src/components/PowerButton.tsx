import React from 'react'

interface Props {
  power: boolean
  setPower: React.Dispatch<React.SetStateAction<boolean>>
  setDisplay: React.Dispatch<React.SetStateAction<string>>
}

const PowerButton: React.FC<Props> = ({
  power,
  setPower,
  setDisplay,
}: Props) => {
  return (
    <section className="w-full py-2 md:py-4 bg-gray-500 grid auto-rows-max gap-2 md:gap-4">
      <h3 className="text-2xl text-center text-white">Power</h3>
      <div className="flex justify-center w-full h-full gap-8">
        <button
          id="on"
          onClick={() => {
            setPower(true)
            setDisplay('Welcome!')
          }}
          className={`${
            power ? 'bg-green-600' : 'bg-gray-200 line-through'
          } py-4 px-8 rounded-md`}
        >
          ON
        </button>

        <button
          id="off"
          onClick={() => setPower(false)}
          className={`${
            power ? 'bg-gray-200 line-through' : 'bg-red-600'
          } py-4 px-8 rounded-md`}
        >
          OFF
        </button>
      </div>
    </section>
  )
}

export default PowerButton
