import Image from "next/image";
import { getPokemon, pokemonAPI } from "./lib/PokemonAPI";
import Link from "next/link";

export default function Home({ pokemonData }) {
  return (
    <div>
      {pokemonData.map((pokemon) => (
        <div key={pokemon.name}>
          <div>{pokemon.name}</div>
          <Image
            src={pokemon.sprites.other["official-artwork"].front_default}
            width={200}
            height={200}
            alt={pokemon.name}
          />
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const pokemonData = await getPokemon();
  
  return {
    props: {
      pokemonData
    }
  };
}
