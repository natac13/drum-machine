import React from 'react'

interface Props {
  display: string
  power: boolean
}

const Display: React.FC<Props> = (props: Props) => {
  return (
    <section
      id="display"
      className="w-2/3 mx-auto bg-blue-100 h-10 grid place-items-center"
    >
      <p className="text-xl font-bold">{props.power ? props.display : '---'}</p>
    </section>
  )
}

export default Display
