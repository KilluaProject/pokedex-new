import Image from "next/image"
import { getPokemon, pokemonAPI } from "./lib/PokemonAPI"
import PokemonCard from "./components/PokemonCard"



export default function Home() {

  return (
  <div>
    <PokemonCard/>
  </div>
  )
}
