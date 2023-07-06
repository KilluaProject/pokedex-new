import React from 'react'
import PokemonCard from './PokemonCard'

export default function Results({results}) {
  return (
    <div className="">

        {results.map((monster,index) => (
            <PokemonCard key={index} pokemon={monster}/>
        ))}

    </div>
  )
}
