
import { pokemonAPI } from "./lib/PokemonAPI"



export default await function Home() {

  const getPokemonList = await pokemonAPI()
  console.log(getPokemonList)
  return (
  <div>
   
  </div>
  )
}
