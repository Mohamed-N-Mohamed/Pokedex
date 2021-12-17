import React,{useState, useEffect} from 'react'
import PokemonsUI from './PokemonsUI';

const Pokemons = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')
  console.log(loadMore);

  const getPokemons = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();
    setLoadMore(data.next)



    function callSecondApi(result) {
      result.forEach( async (pokemon) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
        const data = await response.json()
        setPokemons(current => [...current, data])
      })

    }

    callSecondApi(data.results)
    
  }

  //load more pokemons
  const handleClick = () => {
    getPokemons()
    
  }

 


  useEffect(() => {
   getPokemons()
  }, [])
  return (
    <div className="pokemon-container flex flex-wrap justify-center items-center">
         {pokemons.map((pokemon) => (     
        <PokemonsUI  name={pokemon.name} image={pokemon.sprites.other.dream_world.front_default}  key={pokemon.id} id={pokemon.id} type={pokemon.types[0].type.name}/>  
      ))}


     
        <button className="load-more" onClick={handleClick}>Load More Pokemons</button>
     
    </div>

    

    
  )
}

export default Pokemons
