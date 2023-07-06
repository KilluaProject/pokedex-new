import React from 'react';

export function Results({ results }) {
  

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
