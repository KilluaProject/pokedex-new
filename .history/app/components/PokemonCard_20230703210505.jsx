import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const POKEMON_API = "https://pokeapi.co/api/v2/";

async function getPokemon(pokemonName) {
  const res = await fetch(POKEMON_API + "pokemon/" + pokemonName);
  const data = await res.json();
  return data;
}

export default function PokemonCard() {
  const router = useRouter();
  const { pokemonName } = router.query; // Retrieve 'pokemonName' from the router's query object
  const [pokemonObject, setPokemonObject] = useState(null);

  useEffect(() => {
    async function fetchPokemonData() {
      if (pokemonName) {
        const data = await getPokemon(pokemonName);
        setPokemonObject(data);
      }
    }

    fetchPokemonData();
  }, [pokemonName]);

  if (!pokemonObject) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{pokemonName}</h1>
      <Image
        width={200}
        height={200}
        alt={pokemonName}
        src={pokemonObject.sprites.other['official-artwork'].front_default}
      />
    </div>
  );
}
