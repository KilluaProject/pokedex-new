import React from 'react'
import PokemonCard from './PokemonCard'
import { getPokemon, pokemonAPI } from '../lib/PokemonAPI'


export default async function Results() {

  const pokemonList = await pokemonAPI()

    
    const pokemonRes = await getPokemon(url)
    const pokemonData = await pokemonRes.json()
    console.log(pokemonData)

  



  return (
    <div className="grid grid-cols-4 gap-5">
        
        {pokemonList.map((monster) => (

            <PokemonCard pokemon={monster}/>
            
        ))}

    </div>
  )
}
