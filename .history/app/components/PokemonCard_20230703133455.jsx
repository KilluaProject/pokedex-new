import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function PokemonCard({pokemon}) {
  return (
    <div>
        <Link href={pokemon.name}>
            {pokemon.name}
            <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.name}.png`}
            width={200}
            height={200}
            alt={pokemon.name}
            />
        </Link>
        
    </div>
  )
}
