import Image from "next/image"
import { getPokemon, pokemonAPI } from "./lib/PokemonAPI"
import Link from "next/link"
import { useRouter } from "next/router"

export default async function Home() {

  const router = useRouter()
  const pokemonName = router.query.pokemon?.toString() || ""

  return (
    <h1></h1>
  )
}
