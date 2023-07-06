import React from 'react'
import PokemonCard from './PokemonCard'
import { getPokemon, pokemonAPI } from '../lib/PokemonAPI'


export default async function Results() {

  const pokemonList = await pokemonAPI()
  for(const pokemon of data.results){
    
    const getPokemonData = await getPokemon(pokemon.url)
  }



  return (
    <div className="grid grid-cols-4 gap-5">
        
        {pokemonList.map((monster) => (

            <PokemonCard pokemon={monster}/>
            
        ))}

    </div>
  )
}
