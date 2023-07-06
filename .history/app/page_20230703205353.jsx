import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const POKEMON_API = "https://pokeapi.co/api/v2/";

async function getPokemon(pokemonName) {
  const res = await fetch(POKEMON_API + "pokemon/" + pokemonName);
  const data = await res.json();
  return data;
}

export default function PokemonCard() {
  const [pokemonObject, setPokemonObject] = useState(null);

  useEffect(() => {
    async function fetchPokemonData() {
      const data = await getPokemon("pikachu"); // Replace "pikachu" with the desired Pokémon name
      setPokemonObject(data);
    }

    fetchPokemonData();
  }, []);

  if (!pokemonObject) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Image
        width={200}
        height={200}
        alt={pokemonObject.name}
        src={pokemonObject.sprites.other['official-artwork'].front_default}
      />
    </div>
  );
}
