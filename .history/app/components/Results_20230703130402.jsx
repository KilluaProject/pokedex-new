import React from 'react'

export default function Results({results}) {
  return (
    <div>
       {results.map((pokemon) => (
        <Card pokemon={pokemon.name}/>
       ))}
    </div>
  )
}
