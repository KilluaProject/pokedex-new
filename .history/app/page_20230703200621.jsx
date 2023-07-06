import Image from "next/image"
import { getPokemon, pokemonAPI } from "./lib/PokemonAPI"

export default async function Home() {

  const pokemonList = await pokemonAPI()
  console.log(pokemonList)
  return (
    <div className="grid grid-cols-4 text-center container mx-auto">
    {pokemonList.map((pokemon) => (
      <div className="flex">{pokemon.name}</div>
    ))}
    </div>
  )
}
