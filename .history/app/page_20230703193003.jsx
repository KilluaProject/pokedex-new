import { getPokemon } from "./lib/PokemonAPI"



export default async function Home() {

  const PokemonName = await getPokemon()
  console.log(PokemonName)
  
  return (

    <h1>
     

    </h1>
  )
}
