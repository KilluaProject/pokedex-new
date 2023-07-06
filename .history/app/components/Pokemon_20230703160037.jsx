import Image from 'next/image'
import React from 'react'


export default function Pokemon({pokemon,index}) {

    const pokeIndex = ('000' + (index + 1)).slice(-3)

  return (
    
    <div className="sm:grid grid-cols-4 items-center text-center">
        <Image
        width={200}
        height={200}
        alt={pokemon.name}
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokeIndex}.png`}
        />
        
        {pokemon.name}
        
        
    </div>
  )
}
