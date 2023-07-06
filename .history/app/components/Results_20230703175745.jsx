import React from 'react'
import PokemonCard from './PokemonCard'


export default async function Results() {

  const pokemonList = await pokemonAPI()
  const PokemonImage = await getPokemon()

  return (
    <div className="grid grid-cols-4 gap-5">
        
        {pokemonList.map((monster,index) => (

            <PokemonCard key={index} pokemon={monster}/>
        ))}

        {PokemonImage.map((iamgee) => (
          <h1></h1>
        ))}

    </div>
  )
}
