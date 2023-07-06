import Image from 'next/image'
import React from 'react'


export default function Pokemon({pokemon,index}) {
  return (
    <div>
        <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png`}
        />
        
        {pokemon.name}
        
        
    </div>
  )
}
