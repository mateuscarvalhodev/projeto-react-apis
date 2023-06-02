/* eslint-disable react/jsx-no-undef */
import { useEffect, useState } from "react";
import PokemonCard from "../components/PokemonCard";
import { Container } from "./styles";
import { api } from "../services/api";

const Dashboard = () => {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [isDisableNext, setIsDisableNext] = useState(false);
  const [isDisablePrevious, setIsDisablePrevious] = useState(true);

  useEffect(() => {
    api
      .get("/pokemon", {
        params: {
          limit: 20,
          offset: 20 * page,
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
          <PokemonCard key={pokemon.index} name={pokemon.name} />
        ))}
      </Container>
      <button onClick={() => setPage(page - 1)} disabled={isDisablePrevious}>
        VOLTAR PAGINA
      </button>
      <button onClick={() => setPage(page + 1)} disabled={isDisableNext}>
        AVANÇAR PAGINA
      </button>
    </>
  );
};

export default Dashboard;
