
const POKEMON_API = "https://pokeapi.co/api/v2/"

export async function pokemonAPI(name) {
 const res = await fetch(POKEMON_API + "https://pokeapi.co/api/v2/pokemon/ditto" + name)
 const data = await res.json()
 return data.results
}



