"use client"

import { useEffect, useState } from "react";
import { pokemonAPI } from "./lib/PokemonAPI";

export default function Home() {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getPokemonData("ditto");
      setPokemonData(response);
    };
    fetchData();
  }, []);

  if (!pokemonData) {
    return <div>Loading...</div>;
  }

  const { name, sprites } = pokemonData;
  const imageUrl = sprites.front_default;

  return (
    <div>
      <h1>{name}</h1>
      <img src={imageUrl} alt={name} />
    </div>
  );
}
