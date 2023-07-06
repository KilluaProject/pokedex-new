import React from 'react';
import PokemonCard from './PokemonCard';

export default function Results({ results }) {
  if (!Array.isArray(results)) {
    // Handle the case when results is not an array, e.g., if it is null or undefined
    return null; // or display an error message
  }

  return (
    <div>
      {results.map((pokemon) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </div>
  );
}
