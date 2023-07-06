import React from 'react'
import PokemonCard from './PokemonCard'
export default function Results({results}) {
  return (
    <div className="grid grid-cols-4">
       {results.map((pokemon) => (
        <PokemonCard pokemon={pokemon}/>
       ))}
    </div>
  )
}
