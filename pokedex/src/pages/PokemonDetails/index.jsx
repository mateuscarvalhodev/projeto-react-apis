/* eslint-disable react-hooks/exhaustive-deps */

import { useContext, useState } from "react";
import imgBackground from "../../assets/img/pngwing 1.png";


import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import LoadingIndicator from "../../LoadingIndicator";
import pokemonTypes from "../../pokemonTypes";
import { context } from "../../Context";

const backgroundColors = {
  grass: 'bg-grass',
  fire: 'bg-fire',
  water: 'bg-water',
  poison: 'bg-poison',
  normal: 'bg-normal',
  bug: 'bg-bug',
  flying: 'bg-flying',
  electric: 'bg-electric',
  ground: 'bg-ground',
  fighting: 'bg-fighting',
  rock: 'bg-rock',
  ice: 'bg-ice',
  ghost: 'bg-ghost',
  steel: 'bg-steel',
  dragon: 'bg-dragon',
  dark: 'bg-dark',
  fairy: 'bg-fairy',
  psychic: 'bg-psychic'
}

// eslint-disable-next-line react-hooks/rules-of-hooks

const getBackgroundColor = (types) => {
  if (types.length > 0) {
    if (types[0].type.name === 'normal' && types[1]) {
      return backgroundColors[types[1].type.name] || 'bg-white';
    }
    return backgroundColors[types[0].type.name] || 'bg-white';
  }
  return 'bg-white';
};

const PokemonDetails = () => {
  const { setPokemonFromHeader } = useContext(context);
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState()
  const id = useParams();

  useEffect(() => {
    api.get(`/pokemon/${id.id}`).then((res) => {
      setPokemon(res.data);
      setPokemonFromHeader(res.data);
      setLoading(false);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  let moveCount = 0;
  let total = 0;
  if (!loading) {
    for (const stat of pokemon.stats) {
      total += stat.base_stat;
    }
  }


  if (loading) {
    return <LoadingIndicator />;
  }

  return (
    <>
      <div className='flex justify-center h-screen'>
        <div className={`flex relative w-11/12 h-3/5 rounded-xl mt-12 ${getBackgroundColor(pokemon.types)}`}>
          <img className="absolute right-0 w-48 -top-20" src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.id} />
          <div className="flex flex-col items-center justify-around w-52 gap-5 flex-1">
            <div className="flex w-4/5 h-56 bg-white rounded-lg justify-center items-center">
              <img className="w-36" src={pokemon.sprites.front_default} alt={pokemon.id} />
            </div>
            <div className="flex w-4/5 h-56 bg-white rounded-lg justify-center items-center">
              <img className="w-36" src={pokemon.sprites.back_default} alt={pokemon.id} />
            </div>
          </div>

          <div className="flex flex-col align-center justify-center gap-4 flex-1 h-full rounded ml-8">
            <div className=' bg-white h-full mt-8 mb-8 rounded-lg flex flex-col gap-4 justify-center align-center'>
              <h1 className='ml-8'>STATS</h1>
              {
                pokemon.stats.map((stat, index) => {
                  return (
                    <div key={index} className='ml-8 max-w-full mr-8'>
                      <div className="mb-1 text-base font-medium text-black">{stat.stat.name} {stat.base_stat}</div>
                      <div
                        className="bg-yellow-400 h-2.5 rounded-full max-w-full"
                        style={{
                          width: `${stat.base_stat}%`,
                          backgroundColor: `hsl(calc(${stat.base_stat} * 0.8), 70%, 50%)`
                        }}
                      ></div>
                    </div>
                  )
                })
              }

              <p className='ml-8'>total: {total}</p>
            </div>
          </div>
          <div className="w-1/2 pl-12 flex-2">
            <div className="mt-2 text-white">
              <h2 className="font-bold text-2xl">#{pokemon.id < 10 ? `0${pokemon.id}` : `${pokemon.id}`}</h2>
              <h2 className="font-bold text-2xl">{pokemon.name}</h2>
              <div className="flex gap-2">
                {pokemon.types.map((type) => {
                  return (
                    <img
                      className="w-18"
                      src={pokemonTypes[type.type.name]}
                      key={type.type.name}
                    />
                  );
                })}
              </div>
              <div className="bg-white text-black h-80 w-72 mt-12 rounded-lg">
                <h2 className="p-4">Moves:</h2>
                <div className="flex flex-col items-start ml-4 gap-2">
                  {pokemon.moves.map((move, index) => {
                    if (moveCount < 5) {
                      moveCount += 1;
                      return <p className="p-2 bg-gray-200 rounded-full text-center border-2 border-dashed border-gray-500" key={index}>{move.move.name}</p>;
                    }
                  })}
                </div>
              </div>
            </div>
            <img className="w-full h-full object-cover" src={imgBackground} />
          </div>
        </div>
      </div >
    </>
  );
};
export default PokemonDetails;
