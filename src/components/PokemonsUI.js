import React, {useState, useEffect} from 'react'

const PokemonsUI = ({name, image}) => {  
  console.log(image);
  return (
    <div>
      <h3>{name}</h3>
      <img src={image} alt="" />
     
    </div>
  )
}

export default PokemonsUI
