import React from 'react'

export default function Results({results}) {
  return (
    <div>
        {results.map((monster,index) => (
            <div key={index}>{monster.name}</div>
        ))}

    </div>
  )
}
