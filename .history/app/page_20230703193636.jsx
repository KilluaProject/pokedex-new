import { getPokemon } from "./lib/PokemonAPI";

export default function Home({ initialPokemon }) {
  const [pokemon, setPokemon] = useState(initialPokemon);

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const pokemonData = await getPokemon();
        setPokemon(pokemonData);
      } catch (error) {
        console.error("Error fetching Pokémon:", error);
      }
    }

    fetchPokemon();
  }, []);

  return (
    <div>
      <h1>
        {pokemon.map((pokemonName) => (
          <h1 key={pokemonName.name}>{pokemonName.name}</h1>
        ))}
      </h1>
    </div>
  );
}
