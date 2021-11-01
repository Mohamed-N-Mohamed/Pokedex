import React from 'react'

const Home = () => {
  return (
    <div className="home-content">
      <div className="title p-4 text-center">
        <h1 className="text-4xl mt-4">Welcome to Pokedex</h1>
      </div>

      <div className="search">
        <input type="text"  placeholder="Search for pokemon"/>
      </div>
      
    </div>
  )
}

export default Home
