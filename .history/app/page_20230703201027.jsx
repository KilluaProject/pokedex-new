import Image from "next/image"
import { getPokemon, pokemonAPI } from "./lib/PokemonAPI"
import Link from "next/link"

export default async function Home() {

  const pokemonList = await pokemonAPI()
  console.log(pokemonList)
  return (
    <Link href={""} className="grid grid-cols-4 text-center container mx-auto gap-5">
    {pokemonList.map((pokemon) => (
      <div className="flex flex-col border items-center p-5 rounded-lg">{pokemon.name}</div>
    ))}
    </Link>
  )
}
