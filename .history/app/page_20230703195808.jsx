import Image from "next/image"
import { getPokemon } from "./lib/PokemonAPI"

export default async function Home() {

  const pokemonList = await getPokemon()
  console.log(pokemonList)
  return (
    <div>
     <h1>{pokemonList.name}</h1>
     <Image
     width={200}
     height={200}
     alt={pokemonList.pikachu}
     src={pokemonList.sprites.front_shiny}
     
     />
    </div>
  )
}
