import { useEffect, useState } from 'react';
import PokemonCard from '../../components/PokemonCard';

import { api } from '../../services/api';
import { Buttons, Container } from './styles';
import LoadingIndicator from '../../LoadingIndicator';

const Dashboard = () => {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [isDisableNext, setIsDisableNext] = useState(false);
  const [isDisablePrevious, setIsDisablePrevious] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api.get('/pokemon', {
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

          const imagePromises = pokemonData.map((pokemon) => {
            const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;
            return new Promise((resolve) => {
              const img = new Image();
              img.src = imageUrl;
              img.onload = resolve;
            });
          });

          Promise.all(imagePromises)
            .then(() => {
              setPokemons(pokemonData);
              setLoading(false);
            })
            .catch((err) => {
              console.log(err);
              setLoading(false);
            });
        });
      });
  }, [page]);

  if (loading) {
    return <LoadingIndicator />;
  }
  return (
    <>
      <Container>
        {pokemons.map((pokemon) => {
          return (
            <PokemonCard
              key={pokemon.id}
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
