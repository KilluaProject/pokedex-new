import React from 'react'
import PokemonCard from './PokemonCard'

export default function Results({results}) {
  return (
    <div className="grid grid-cols-4 item-center text-center bg-slate-400">

        {results.map((monster,index) => (
            <PokemonCard key={index} pokemon={monster}/>
        ))}

    </div>
  )
}
