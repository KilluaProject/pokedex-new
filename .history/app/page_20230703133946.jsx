import Image from 'next/image'
import Results from './components/Results'

export default async function Home({searchParams}) {

  const pokemon = searchParams.pokemon
  const res = await fetch("https://pokeapi.co/api/v2/pokemon")
  const data = await res.json()
  const results = data.results

  console.log(results)
  return (
    <section>
      <Results results={results}/>
    </section>
  )
}
