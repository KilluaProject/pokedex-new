
import { pokemonAPI } from "../lib/PokemonAPI"
import PokemonCard from "./PokemonCard"

export default async function PokemonGrid() {
    

    
    const pokemonList = await pokemonAPI()

 
  return (
    <div className="flex flex-col sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-white text-center items-center justify-center gap-5">

    {pokemonList.map((pokemon) => {
        return (
     
          <PokemonCard key={pokemon.name} data={pokemon}/>
      
        )
      })}

    </div>
  )
}
