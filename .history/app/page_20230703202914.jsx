import Image from "next/image"
import { getPokemon, pokemonAPI } from "./lib/PokemonAPI"
import Link from "next/link"


export default async function Home() {

  const pokemonData = await getPokemon()

  return (
   <div>
    {pokemonData.map((pokemon,index) => {
      <div key={index}>{pokemon.name}</div>
    })}
   </div>
  )
}
