


export default async function Home() {

  const POKEMON_API = "https://pokeapi.co/api/v2/"

 
  const res = await fetch(POKEMON_API + "pokemon/")
  const data = await res.json();
  return data.results

  
  return (

    

    <section>

    </section>
  )
}
