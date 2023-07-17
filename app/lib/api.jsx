const POKEMON_API = 'https://pokeapi.co/api/v2';

const createPokemonObject = async (pokemon) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
  const data = await res.json();
  return data;
};

export async function fetchPokemonList(params) {
  const res = await fetch(POKEMON_API + '/pokemon?' + new URLSearchParams(params));
  const data = await res.json();
  const pokemons = data.results;
  const pokemonObjects = await Promise.all(
    pokemons.map(async (pokemon) => {
      return createPokemonObject(pokemon);
    })
  );
  return pokemonObjects;
}

export async function getPokemonDetail(name) {
  const res = await fetch(`${POKEMON_API}/pokemon/${name}`);
  const data = await res.json();
  return data;
}
