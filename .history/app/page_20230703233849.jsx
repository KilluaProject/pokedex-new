
import { pokemonAPI } from "./lib/PokemonAPI"



export default async function Home() {

  const getPokemonList = await pokemonAPI()
  console.log(getPokemonList)
  return (
  <div>
    {getPokemonList && <>
    
    <h1>{getPokemonList.name}</h1>
    </>}
   
  </div>
  )
}
