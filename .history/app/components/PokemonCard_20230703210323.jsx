"use client"

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const POKEMON_API = "https://pokeapi.co/api/v2/";

async function getPokemon(pokemonName) {
  const res = await fetch(POKEMON_API + "pokemon/" + pokemonName);
  const data = await res.json();
  return data;
}

export default function PokemonCard({ params }) {
  const { pokemonName } = params; // Destructure 'pokemonName' from 'params'
  const [pokemonObject, setPokemonObject] = useState("");

  useEffect(() => {
    async function fetchPokemonData() {
      const data = await getPokemon(pokemonName);
      setPokemonObject(data);
    }

    fetchPokemonData();
  }, [pokemonName]);

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
