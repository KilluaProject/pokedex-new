import React from 'react'

export default function Results({results}) {
  return (
    <div>
       {results.map((pokemon) => (
        <div>
            {pokemon.name}
        </div>
       ))}
    </div>
  )
}
