import Image from 'next/image';
import { pokemonList } from './lib/api';
import PokemonCard from './components/PokemonCard';

export default async function Home() {
  const pokemons = await pokemonList();

  return (
    <div>
      {pokemons.map((pokemon) => {
        return <PokemonCard key={pokemon.name} data={pokemon} />;
      })}
    </div>
  );
}
