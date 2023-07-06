import React from 'react'

export default function Results({results}) {
  return (
    <div>
        {results.map((monster,index) => (
            <div>{monster.name}</div>
        ))}

    </div>
  )
}
