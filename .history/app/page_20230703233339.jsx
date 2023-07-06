import PokemonCard from "./components/PokemonCard"
import { pokemonAPI } from "./lib/PokemonAPI"



export default function Home() {

  const getPokemonList = pokemonAPI()

  return (
  <div>
    {getPokemonList.map((pokemon) => (
      <div>
        {pokemon.name}
      </div>
    ))}
  </div>
  )
}
