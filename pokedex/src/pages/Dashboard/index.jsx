/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import { useEffect, useState } from "react";
import PokemonCard from "../../components/PokemonCard";

import { api } from "../../services/api";
import { Buttons, Container } from "./styles";

const Dashboard = () => {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [isDisableNext, setIsDisableNext] = useState(false);
  const [isDisablePrevious, setIsDisablePrevious] = useState(true);

  useEffect(() => {
    api
      .get("/pokemon", {
        params: {
          limit: 21,
          offset: 21 * page,
        },
      })
      .then((response) => {
        const { next, previous, results } = response.data;
        setIsDisableNext(!next);
        setIsDisablePrevious(!previous);

        const promises = results.map((result) => api.get(result.url));
        Promise.all(promises).then((responses) => {
          const pokemonData = responses.map((res) => res.data);
          setPokemons(pokemonData);
        });
      });
  }, [page]);
  return (
    <>
      <Container>
        {pokemons.map((pokemon, index) => {
          console.log(pokemon.name, pokemon.types);
          return (
            <PokemonCard
              key={index}
              name={pokemon.name}
              id={pokemon.id < 10 ? `0${pokemon.id}` : pokemon.id}
              pokemonImage={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
              types={pokemon.types}
            />
          );
        })}
      </Container>
      <Buttons>
        <button onClick={() => setPage(page - 1)} disabled={isDisablePrevious}>
          VOLTAR PAGINA
        </button>
        <button onClick={() => setPage(page + 1)} disabled={isDisableNext}>
          AVANÇAR PAGINA
        </button>
      </Buttons>
    </>
  );
};

export default Dashboard;
