import Image from 'next/image'
import React from 'react'


export default function Pokemon({pokemon,index}) {
  return (
    <div>
        <Image/>
        
        {pokemon.name}
        
        
    </div>
  )
}
