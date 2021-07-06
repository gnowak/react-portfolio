import React from "react"

import bg from "../assets/images/mountain-bg.jpg"

const Home = () => {
  return (
    <main
      className="bg-cover bg-no-repeat bg-center h-screen pt-36 px-12 h-screen"
      style={{ backgroundImage: 'url( "' + bg + '")' }}>
      <section className="relative flex justify-center pt-12 lg:pt-64">
        <h1 className="text-6xl text-gray-200 font-bold leading-none lg:leading-snug">
          Hello World, I'm Geoff
        </h1>
      </section>
    </main>
  )
}

export default Home
