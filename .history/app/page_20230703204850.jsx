import Image from "next/image"
import { getPokemon, pokemonAPI } from "./lib/PokemonAPI"
import Link from "next/link"
import PokemonCard from "./components/PokemonCard"


export default async function Home({results}) {

  const pokemonData = await getPokemon()

  return (
   <div>
    {pokemonData.map((pokemon) => (
      <PokemonCard key={results} pokemon={pokemon}/>
    ))}
    
   </div>
  )
}
