
import { useState } from "react"

export default async function Home() {

  const res = await fetch("https://pokeapi.co/api/v2/pokemon")
  const pokemonList = await res.json()

  const [pokemon, setPokemon] = useState(pokemonList)
  
 
  return (
    <section>
    
    </section>
  )
}
