import { useContext } from "react";
import { context } from "../../Context";
import PokemonCard from "../../components/PokemonCard";

const Pokedex = () => {
  const { pokedex, removePokemonToPokedex } = useContext(context);
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center'>
        {pokedex.map((pokemon) => {
          return (
            <PokemonCard
              key={pokemon.id}
              name={pokemon.name}
              id={pokemon.id}
              pokemonImage={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
              types={pokemon.types}
            />
          );
        })}
      </div>

    </>
  );
};
export default Pokedex;
