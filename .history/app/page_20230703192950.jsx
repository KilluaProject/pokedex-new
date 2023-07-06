import { getPokemon } from "./lib/PokemonAPI"



export default async function Home() {

  const PokemonName = await getPokemon()
  console.log(PokemonName)
  
  return (

    <h1>
      {PokemonName && 
      <>
        <h1>{PokemonName.name}</h1>
      
      </>
      
      }

    </h1>
  )
}
