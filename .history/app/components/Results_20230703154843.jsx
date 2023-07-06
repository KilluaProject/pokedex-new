import React from 'react'
import Pokemon from './Pokemon'

export default function Results({results}) {
  return (
    <div>
        {results.map((monster,index) => (
           <Pokemon key={index} pokemon={monster} index={index}/>
        ))}

    </div>
  )
}
