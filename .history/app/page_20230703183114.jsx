


export async function getPokemon(){
  const res = await fetch(POKEMON_API + "pokemon/ditto")
  const data = await res.json();
  return data
}

export default function Home() {
  

 
  return (

    <section>

    </section>
  )
}
