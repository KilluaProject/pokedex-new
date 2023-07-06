import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


export default function PokemonCard({pokemon,pokemonImager}) {

  return (
    
    <Link href={pokemon.name} className="border text-center flex flex-col items-center p-5 ">
          
           <Image
            
            width={200}
            height={200}
            alt={pokemon.name}
            src={""}
            />
            <h1>{pokemon.name}</h1>
        
        

    </Link>
  )
}
