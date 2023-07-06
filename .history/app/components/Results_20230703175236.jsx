import React from 'react'
import PokemonCard from './PokemonCard'
import { pokemonAPI } from '../lib/PokemonAPI'

export default function Results({results}) {
  return (
    <div className="grid grid-cols-4 gap-5">
        
        {results.map((monster,index) => (

            <PokemonCard key={index} pokemon={monster}/>
        ))}

    </div>
  )
}
