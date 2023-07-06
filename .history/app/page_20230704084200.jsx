
import { pokemonAPI } from "./lib/PokemonAPI"



export default async function Home() {

  const getPokemonList = await pokemonAPI()
  console.log(getPokemonList)
  return (

  <div>
    {getPokemonList.map((pokemon) => {

      return (
      <>
      <h1>{pokemon.name}</h1>
      
      </>
      )
    })}
  </div>

  )
}
