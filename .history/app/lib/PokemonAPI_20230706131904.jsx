
const POKEMON_API = "https://pokeapi.co/api/v2/"

export async function pokemonAPI(name) {
 const res = await fetch(POKEMON_API + "https://pokeapi.co/api/v2/pokemon/1" + name)
 const data = await res.json()
 return data
}



