import Image from "next/image"
import { getPokemon, pokemonAPI } from "./lib/PokemonAPI"
import Link from "next/link"


export default async function Home() {

  const pokemonData = await getPokemon()
  console.log(pokemonData)

  return (
   <div>
    {pokemonData.map((pokemon) => (
     <div>{pokemon.name}</div> 
    ))}
   </div>
  )
}
