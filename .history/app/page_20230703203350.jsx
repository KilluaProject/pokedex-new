import Image from "next/image"
import { getPokemon, pokemonAPI } from "./lib/PokemonAPI"
import Link from "next/link"


export default async function Home({params} : {params: PokemonName}) {

  const pokemonData = await getPokemon()
  const {PokemonName} = params
  const pokemonObject = await pokemonAPI(PokemonName)
  console.log(pokemonData)

  return (
   <div>
    {pokemonData.map((pokemon) => (
     <div>{pokemon.name}</div> 
    ))}
    
   </div>
  )
}
