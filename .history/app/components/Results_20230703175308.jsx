import React from 'react'
import PokemonCard from './PokemonCard'
import { pokemonAPI } from '../lib/PokemonAPI'

export default function Results({results}) {

  const pokemonList = await pokemonAPI()
  return (
    <div className="grid grid-cols-4 gap-5">
        
        {pokemonList.map((monster,index) => (

            <PokemonCard key={index} pokemon={monster}/>
        ))}

    </div>
  )
}
