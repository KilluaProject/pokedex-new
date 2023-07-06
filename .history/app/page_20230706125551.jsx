
import Image from "next/image";
import { pokemonAPI } from "./lib/PokemonAPI"



export default async function Home() {

  const getPokemonList = await pokemonAPI()
  console.log(getPokemonList)
  return (

  <div>
    {getPokemonList.map((pokemon) => {
      const id = pokemon.url.split('/')[6];
      return (
        <div key={pokemon.name}>
          
          <h1>{pokemon.name}</h1>
          <Image
          width={200}
          height={200}
          alt={pokemon.name}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${id}`}
          />


        </div>
      )
    })}
  </div>

  )
}
