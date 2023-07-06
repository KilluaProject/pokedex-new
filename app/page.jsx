
import PokemonGrid from "./components/PokemonGrid"
import { pokemonAPI } from "./lib/PokemonAPI"



export default async function Home() {

  const pokemonList = await pokemonAPI()

  return (
    <div className=" container mx-auto">

      <div>
        
      </div>
      <PokemonGrid pokemonList={pokemonList}/>
    </div>

  )
}
