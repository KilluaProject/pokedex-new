import Image from 'next/image'
import React from 'react'


export default function Pokemon({pokemon,index}) {

    const pokeIndex = ('000' + (index + 1)).slice(-3)

  return (
    
    <div>
        <Image
        width={200}
        height={200}
        alt={pokemon.name}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png`}
        />
        
        {pokemon.name}
        
        
    </div>
  )
}
