import Image from 'next/image'

export default async function Home({searchParams}) {

  const pokemon = searchParams.pokemon
  const res = await fetch("")

  return (
    <section>

    </section>
  )
}
