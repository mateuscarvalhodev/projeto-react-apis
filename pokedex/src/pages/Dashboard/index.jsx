import { useEffect, useState } from 'react';
import PokemonCard from '../../components/PokemonCard';

import { api } from '../../services/api';

import LoadingIndicator from '../../LoadingIndicator';
import Modal from '../../components/Modal';

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
      <Modal />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {pokemons.map((pokemon) => {
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
      <div className="flex flex-col md:flex-row justify-center space-y-5 md:space-y-0 md:space-x-5 mt-6 mb-3">
        <button
          onClick={() => setPage(page - 1)}
          disabled={isDisablePrevious}
          className={`h-12 w-full md:w-64 rounded-lg border-none bg-white transition-colors duration-400 ease-in-out 
    ${isDisablePrevious ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-500'}`}
        >
          VOLTAR PAGINA
        </button>
        <button
          onClick={() => setPage(page + 1)}
          disabled={isDisableNext}
          className={`h-12 w-full md:w-64 rounded-lg border-none bg-white transition-colors duration-400 ease-in-out 
    ${isDisableNext ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-500'}`}
        >
          AVANÇAR PAGINA
        </button>
      </div>
    </>
  );
};

export default Dashboard;
