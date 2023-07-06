import React from 'react'
import PokemonCard from './PokemonCard'
import { getPokemon, pokemonAPI } from '../lib/PokemonAPI'

export default async function Results() {

  const pokemonList = await pokemonAPI()
  const PokemonImage = await getPokemon(PokemonName)

  return (
    <div className="grid grid-cols-4 gap-5">
        
        {pokemonList.map((monster,index) => (

            <PokemonCard key={index} pokemon={monster}/>
        ))}

    </div>
  )
}
