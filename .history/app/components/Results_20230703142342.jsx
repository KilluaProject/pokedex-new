import React from 'react'
import PokemonCard from './PokemonCard'
export default function Results({results}) {
  return (
    <div className="sm:grid">
       {results.map((pokemon) => (
        <PokemonCard pokemon={pokemon}/>
       ))}
    </div>
  )
}
