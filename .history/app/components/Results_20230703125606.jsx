import React from 'react'

export default function Results({results}) {
  return (
    <div>
       {results.map((result) => (
        <div> 
            {result.name}
        </div>
       ))}
    </div>
  )
}
