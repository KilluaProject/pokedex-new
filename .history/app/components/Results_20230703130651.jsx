import React from 'react'
import PokemonCard from './PokemonCard'
export default function Results({results}) {
  return (
    <div>
       {results.map((pokemon) => (
        <PokemonCard pokemon={pokemon}/>
       ))}
    </div>
  )
}
