import { getPokemon } from "./lib/PokemonAPI"



export default async function Home() {

  const PokemonName = await getPokemon()
  
  return (

    <h1> hallo</h1>
  )
}
