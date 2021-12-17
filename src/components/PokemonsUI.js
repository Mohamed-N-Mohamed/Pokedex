import React, {useState, useEffect} from 'react'

const PokemonsUI = ({name, image}) => {  
  console.log(image);
  return (
    <div className="pokemons_card p-3">
      <div className="pokemon_img">
      <img src={image} alt="" className=""/>
      </div>
      <div className="pokemon_title">
      <h3 className="text-2xl text-center" >{name}</h3>
      </div>
     
    </div>
  )
}

export default PokemonsUI
