'use client';
import { useEffect, useState } from 'react';
import PokemonGrid from './components/PokemonGrid';
import { fetchPokemonList } from './lib/api';

export default function Home() {
  const [pokemonList, setPokemonList] = useState([]);
  const [pagination, setPagination] = useState({ offset: 0, limit: 15 });

  const getAllPokemons = async () => {
    const newPokemonList = await fetchPokemonList(pagination);
    setPokemonList((state) => [...state, ...newPokemonList]);
  };

  useEffect(() => {
    getAllPokemons();
  }, [pagination]);

  const handleLoadMore = () => {
    setPagination((state) => ({ ...state, offset: state.offset + state.limit }));
  };

  return (
    <div className=" container mx-auto">
      <PokemonGrid pokemonList={pokemonList} />
      <div className="py-10 flex gap-2 flex justify-center items-center">
        <button
          className="text-slate-100 rounded-lg px-3 py-1 bg-slate-900"
          onClick={handleLoadMore}
        >
          Load More
        </button>
      </div>
    </div>
  );
}
