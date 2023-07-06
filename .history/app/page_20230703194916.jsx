import { getPokemon } from "./lib/PokemonAPI"

export default async function Home() {

  const pokemonList = await getPokemon()
  console.log(pokemonList)
  return (
    <div>
     
    </div>
  )
}
