import { getPokemon } from "./lib/PokemonAPI";

export async function getServerSideProps() {
  const pokemon = await getPokemon();

  return {
    props: {
      pokemon
    }
  };
}

export default function Home({ pokemon }) {
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
