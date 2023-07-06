
import Image from "next/image"
import { pokemonAPI } from "./lib/PokemonAPI"



export default async function Home() {

  const getPokemonList = await pokemonAPI()
  console.log(getPokemonList)
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
