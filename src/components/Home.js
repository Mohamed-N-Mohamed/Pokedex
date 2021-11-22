import React from 'react'

const Home = () => {
  return (
    <div className="home-content">
      <div className="title p-4 text-center">
        <h1 className="text-4xl mt-4">Welcome to Pokedex</h1>
      </div>

      <div className="search pt-2 relative mx-auto text-gray-600 pl-5">
        <input type="text"  placeholder="Search for pokemon" className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"/>
        <i className="fas fa-search px-4"></i>
      </div>
      
    </div>
  )
}

export default Home
