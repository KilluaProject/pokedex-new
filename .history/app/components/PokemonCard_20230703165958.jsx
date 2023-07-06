import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

  const POKEMON_API = "https://pokeapi.co/api/v2/"

  async function getPokemon(name){
  const res = await fetch(POKEMON_API + "pokemon/" + name)
  const data = await res.json();
  return data
}

export default function PokemonCard({pokemon}) {

  const pokemonImage = getPokemon(pokemon)


  return (
    
    <Link href={pokemon.name} className="border text-center flex flex-col items-center p-5 ">
          
           <Image
            
            width={200}
            height={200}
            alt={pokemon.name}
            src={pokemonImage.sprites.other[`official-artwork`].front_default}
            />
            <h1>{pokemon.name}</h1>
        
        

    </Link>
  )
}
