
export default async function Home() {

  const res = await fetch("https://pokeapi.co/api/v2/pokemon")
  const pokemonList = await res.json()
  const results = pokemonList.results
  
 
  return (

    <section>
        <h1>{pokemonList}</h1>
    </section>
  )
}