import Results from "./components/Results"


export default async function Home() {
  
    const res = await fetch (POKEMON_API + "pokemon/ditto")
    const data = await res.json();
    return data


 
  return (

    <section>

        <h3>Search Pokemon</h3>
        <Results/>
    </section>
  )
}
