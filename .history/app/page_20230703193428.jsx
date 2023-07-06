import { getPokemon } from "./lib/PokemonAPI"



export default async function Home() {

  const pokemon = await getPokemon()
  
  
  return (

    <h1>
     {pokemon.map((pokemonName)=> (
      <h1>{pokemonName.name}</h1>
     ))}

    </h1>
  )
}
