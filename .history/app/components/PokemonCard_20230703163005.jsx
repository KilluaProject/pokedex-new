import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


export default function PokemonCard({pokemon,index}) {

    const pokeIndex = ('000' + (index + 1)).slice(-3)

  return (
    
    <div className="border text-center flex flex-col ">
          
           <Image
            
            width={200}
            height={200}
            alt={pokemon.name}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png`}
            />
            <h1>{pokemon.name}</h1>
        
        

    </div>
  )
}
