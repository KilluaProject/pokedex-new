import React from 'react'

export default function Results(results) {
  return (
    <div>
       {results.map((pokemon) => (
        <div key={pokemon.id}></div>
       ))}
    </div>
  )
}
