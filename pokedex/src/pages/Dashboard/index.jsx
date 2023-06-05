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
        setPokemons(results);
        console.log(results);
      });
  }, [page]);
  return (
    <>
      <Container>
        {pokemons.map((pokemon, index) => (
          <PokemonCard key={index} name={pokemon.name} />
        ))}
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
