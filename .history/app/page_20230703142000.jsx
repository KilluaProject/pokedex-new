import Image from 'next/image'
import Results from './components/Results'

export default async function Home() {

  const res = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  const data = await res.json()
  const results = data
  return (
    <section>
      <Results results={results}/>
    </section>
  )
}
