import { getPokemon } from "./lib/PokemonAPI"

export default async function Home() {

  const pokemonList = await getPokemon()
  
  
  
  return (
    <div>
      {pokemonList.map((pokemon) => {
        <h1>{pokemon.name}</h1>
      })}
    </div>
  )
}
