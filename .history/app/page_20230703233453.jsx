
import { pokemonAPI } from "./lib/PokemonAPI"



export default function Home() {

  const getPokemonList = pokemonAPI()
  console.log(getPokemonList)
  return (
  <div>
   
  </div>
  )
}
