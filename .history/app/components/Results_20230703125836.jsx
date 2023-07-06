import React from 'react';

export function Results({ results }) {
  if (!results || !Array.isArray(results)) {
    return null; // Return null or display an appropriate fallback if results is not defined or not an array
  }

  return (
    <div>
      {results.map((pokemon) => (
        <div key={pokemon.id}>
          {pokemon.name}
        </div>
      ))}
    </div>
  );
}

export default Results;
