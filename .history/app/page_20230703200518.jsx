import Image from "next/image"
import { getPokemon, pokemonAPI } from "./lib/PokemonAPI"

export default async function Home() {

  const pokemonList = await pokemonAPI()
  console.log(pokemonList)
  return (
    <div className="grid grid-cols-4">
    {pokemonList.map((pokemon) => (
      <div className="border grid grid-cols-4">{pokemon.name}</div>
    ))}
    </div>
  )
}
