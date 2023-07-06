import Results from "./components/Results"

export default async function Home() {

  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
  const data = await res.json()
  const results = data.results
  
  
 
  return (

    <section>
        <Results clasname="grid" results={results}/>
    </section>
  )
}
