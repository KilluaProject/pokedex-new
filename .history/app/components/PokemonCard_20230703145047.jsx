import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function PokemonCard({ pokemon }) {
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.name}`;

  return (
    <div>
      <Link href={pokemon.name}>
        {pokemon.name}
        <Image
          src={imageUrl}
          width={200}
          height={200}
          alt={pokemon.name}
        />
      </Link>
    </div>
  );
}
