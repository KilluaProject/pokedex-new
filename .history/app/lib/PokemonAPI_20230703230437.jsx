
const POKEMON_API = "https://pokeapi.co/api/v2/"

export async function pokemonAPI() {
 const res = await fetch(POKEMON_API)
 const data = await res.json()
 return data
}



