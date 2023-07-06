import Image from "next/image"
import { getPokemon, pokemonAPI } from "./lib/PokemonAPI"

export default async function Home() {

  const pokemonList = await pokemonAPI()
  console.log(pokemonList)
  return (
    <div className="border">
    {pokemonList.map((pokemon) => (
      <h1>{pokemon.name}</h1>
    ))}
    </div>
  )
}
