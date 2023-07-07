"use client"

import { useState } from "react";
import { pokemonAPI } from "../lib/PokemonAPI";
import PokemonCard from "./PokemonCard";

export default function PokemonGrid({ pokemonList }) {
  const [searchText, setSearchText] = useState("");

  const searchFilter = (pokemonList) => {
    return pokemonList.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  const filteredPokemonList = searchFilter(pokemonList);

  return (
    <div className="flex flex-col p-5">
      <div className="p-6">
        <label>Search Your Pokemon</label>
        <input className="border"
          type="text"
          value={searchText}
          placeholder="Enter a Pokemon name"
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <div>
        {filteredPokemonList.map((pokemon) => {
            return (
                <div key={pokemon.name}>

                    <PokemonCard data={pokemon} />
                </div>
            )
            })}
      </div>
    </div>
  );
}
