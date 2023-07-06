
import Image from "next/image";
import { pokemonAPI } from "./lib/PokemonAPI"



export default async function Home() {

  const getPokemonList = await pokemonAPI()
  console.log(getPokemonList)
  return (

  <div>
    {getPokemonList.map((pokemon) => {

      return (
        <div key={pokemon.name}>
          
          <h1>{pokemon.name}</h1>
          <Image
          width={200}
          height={200}
          alt={pokemon.name}
          src={getPokemonList.sprites.other.official-artwork.front_default}
          />


        </div>
      )
    })}
  </div>

  )
}
