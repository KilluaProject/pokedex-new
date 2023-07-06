import { getPokemon } from "./lib/PokemonAPI"

export default async function Home() {

  const pokemonList = await getPokemon()
  console.log(pokemonList)
  return (
    <div>
      {pokemonList.map((pokemon) => (
       <div>{pokemon.url}</div>
      ))}
    </div>
  )
}
