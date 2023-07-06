const POKEMON_API = 'https://pokeapi.co/api/v2';

export async function pokemonList() {
  const res = await fetch(POKEMON_API + '/pokemon' + new URLSearchParams({}));
  const data = await res.json();
  return data.results;
}

export async function getPokemonDetail(name) {
  const res = await fetch(`${POKEMON_API}/pokemon/${name}`);
  const data = await res.json();
  return data;
}
