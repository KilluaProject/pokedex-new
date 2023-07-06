import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function PokemonCard({ pokemon }) {
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon}`;

  return (
    <div>
      <Link href={pokemon.name}>
        {pokemon.name}
        
        <img src={imageUrl} alt={pokemon.name} />
        
      </Link>
    </div>
  );
}
