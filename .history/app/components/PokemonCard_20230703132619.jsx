import Link from 'next/link'
import React from 'react'

export default function PokemonCard({pokemon}) {
  return (
    <div>
        <Link href={pokemon.name}>
            {pokemon.name}
        </Link>
        
    </div>
  )
}
