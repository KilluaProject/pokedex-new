import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function PokemonCard({ pokemon }) {
  const imageUrl = `https://pokeapi.co/api/v2/pokemon/${pokemon.name}/sprites/front_default`;

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
