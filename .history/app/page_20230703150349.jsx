
export default async function Home() {

  const res = await fetch("https://pokeapi.co/api/v2/pokemon")
  const data = await res.json()
  const results = data.res
  return (
    <section>
    
    </section>
  )
}
