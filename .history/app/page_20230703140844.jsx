import Image from 'next/image'
import Results from './components/Results'

export default async function Home() {

  const res = await fetch("https://pokeapi.co/api/v2/pokemon/1")
  const data = await res.json()
  const results = data.results
  return (
    <section>
      <Results results={results}/>
    </section>
  )
}
