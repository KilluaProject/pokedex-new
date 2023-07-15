"use client"

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";


export default function PokemonGrid({ pokemonList }) {
  const [searchText, setSearchText] = useState("");
  const [pokemon, setPokemon] = useState(pokemonList)
  const [offset, setOffset] = useState(0)
 
  const searchFilter = (pokemonList) => {
    return pokemonList.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  const filteredPokemonList = searchFilter(pokemonList);


  const fetchPokemon = async (pokemonList, next) => {
      const response = await fetch(pokemonList)
      const nextPokemon = await response.json()

      setOffset(next ? offset + 20 : offset - 20)
      setPokemon(nextPokemon)
  }

  return (
    <div className="flex flex-col pt-36">
      <div className="flex flex-col gap-3 mb-5">
        <h1 className="text-3xl font-bold">Search Your Favorite Pokemon</h1>
        <input className="border px-4 py-3 rounded-full max-w-xs "
          type="text"
          value={searchText}
          placeholder="Enter a Pokemon name"
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <div className="grid sm:grid-cols-4 gap-5">
        {filteredPokemonList.map((pokemon) => {
            const id = pokemon.url.split('/')[6]
            return (
              
                <Link href={pokemon.name} className="flex flex-col items-center justify-center border p-4 rounded-lg " key={pokemon.name}>
                   

                        <h1>{pokemon.name}</h1>
                        <Image
                        width={200}
                        height={200}
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                        alt={pokemon.name}/>
                    
                    
                </Link>
            )
            })}
      </div>
      <div className="py-10 flex gap-2">

      <button className="disabled:bg-gray-500 px-3 py-1 bg-slate-900" onClick={() => fetchPokemon(pokemon.previous, false)}>prev</button>
      <button className="disabled:bg-gray-500 px-3 py-1 bg-slate-900" onClick={() => fetchPokemon(pokemon.next, true)}>next</button>
   
      </div>
    </div>
  );
}
