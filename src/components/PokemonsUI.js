import React, {useState, useEffect} from 'react'

const PokemonsUI = ({name, image, id, type}) => {  
  
  return (
    <div className="pokemons_card p-3 w-max">
     <h3>{id}</h3>
      <img src={image} alt="" className="w-28 h-28"/>
      
      <div className="pokemon_title">
      <h3 className="text-2xl" >{name}</h3>
      </div>

      <div className="pokemon_type">
        <h3>{type}</h3>
      </div>
     
    </div>
  )
}

export default PokemonsUI
