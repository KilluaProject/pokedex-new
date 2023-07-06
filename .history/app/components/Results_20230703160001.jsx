import React from 'react'
import Pokemon from './Pokemon'

export default function Results({results}) {
  return (
    <div className="sm:grid grid-cols-4 items-center bg-white">
        {results.map((monster,index) => (
           <Pokemon key={index} pokemon={monster} index={index}/>
        ))}

    </div>
  )
}
