import Image from 'next/image'

export default async function Home({searchParams}) {

  const pokemon = searchParams.pokemon
  const res = await fetch("https://pokeapi.co/api/v2/pokemon")
  return (
    <section>

    </section>
  )
}
