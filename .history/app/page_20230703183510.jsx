
const POKEMON_API = "https://pokeapi.co/api/v2/"

export async function getPokemon(){
  const res = await fetch(POKEMON_API + "pokemon/ditto")
  const data = await res.json();
  console.log(data)

}

export default function Home() {
 
  return (

    <section>

    </section>
  )
}
