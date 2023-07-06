

async function getPokemon(){


  const res = await fetch("https://pokeapi.co/api/v2/pokemon")
  const data = await res.json()

}


export default async function Home() {

  return (
    <section>
    <h1>hello</h1>
    </section>
  )
}
