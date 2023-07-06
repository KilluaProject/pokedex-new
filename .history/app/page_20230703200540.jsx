import Image from "next/image"
import { getPokemon, pokemonAPI } from "./lib/PokemonAPI"

export default async function Home() {

  const pokemonList = await pokemonAPI()
  console.log(pokemonList)
  return (
    <div className="grid grid-cols-4 text-center">
    {pokemonList.map((pokemon) => (
      <div className="border">{pokemon.name}</div>
    ))}
    </div>
  )
}
