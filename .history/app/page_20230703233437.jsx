
import { pokemonAPI } from "./lib/PokemonAPI"



export default function Home() {

  const getPokemonList = pokemonAPI()
  console.log(getPokemonList)
  return (
  <div>
    {getPokemonList.map((pokemon) => {
      <div>
        {pokemon.name}
      </div>
})}
  </div>
  )
}
