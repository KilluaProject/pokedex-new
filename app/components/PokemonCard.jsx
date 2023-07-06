import React from 'react';
import { getPokemonDetail } from '../lib/api';

export default async function PokemonCard(props) {
  const { data } = props;
  const pokemonData = await getPokemonDetail(data.name);

  const { sprites } = pokemonData;

  return (
    <div>
      {data.name}
      <div className="w-[180px] h-[180px]">
        <img
          src={sprites.front_default}
          alt=""
          className="w-full h-full object-center object-cover"
        />
      </div>
    </div>
  );
}
