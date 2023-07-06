import Image from "next/image"
import { getPokemon, pokemonAPI } from "./lib/PokemonAPI"

export default async function Home() {

  const pokemonList = await pokemonAPI()
  console.log(pokemonList)
  return (
    <div>
    {pokemonList.map((pokemon) => (
      <div className="border">{pokemon.name}</div>
    ))}
    </div>
  )
}
