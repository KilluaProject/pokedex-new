import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function PokemonCard({pokemon}) {
  return (
    <div>
        <Link href={pokemon.name}>
            {pokemon.name}
            <Image
            src={pokemon.sprites.other[`official-artwork`].front_default}
            width={200}
            height={200}
            alt={pokemon.name}
            />
        </Link>
        
    </div>
  )
}
