import * as React from 'react'
import DrumMachine from '../components/DrumMachine'
import SEO from '../components/seo'
import { graphql, PageProps } from 'gatsby'
import Footer from '../components/Footer'

interface Props extends PageProps {}
// markup
const IndexPage: React.FC<Props> = (props: Props) => {
  return (
    <div className="w-full h-screen grid auto-rows-auto">
      <SEO />
      <main className="w-auto h-auto bg-gray-800 grid auto-rows-min place-items-center">
        <header className="container flex flex-col items-center justify-center mx-auto h-28 md:h-80">
          <h1 className="mb-6 font-sans text-2xl font-bold text-center text-gray-100 md:text-6xl">
            Natac&apos;s Drum Machine
          </h1>
          <h2 className="font-sans font-bold text-center text-gray-300 text:lg md:text-3xl">
            A <a href="https://freecodecamp.org">Free Code Camp Challenge</a>
          </h2>
        </header>
        <DrumMachine />
      </main>
      <Footer />
    </div>
  )
}

export default IndexPage
