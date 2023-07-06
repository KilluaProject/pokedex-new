
const POKEMON_API = "https://pokeapi.co/api/v2/"

export async function getPokemon(){
  const res = await fetch(POKEMON_API + "pokemon/")
  const data = await res.json();
  return data.results
}

export default function Home() {
 
  return (

    <section>

    </section>
  )
}
