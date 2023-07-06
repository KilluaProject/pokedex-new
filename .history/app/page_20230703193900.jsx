import { getPokemon } from "./lib/PokemonAPI"

export default async function Home() {

  const pokemon = await getPokemon()
  console.log(pokemon)
  
  
  return (

    <h1>
     


    </h1>
  )
}
