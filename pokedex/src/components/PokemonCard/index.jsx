/* eslint-disable react/prop-types */
import PokemonTypes from '../../pokemonTypes';
import { GotoPokemonDetails } from '../../services/coordination';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../../assets/img/pngwing 1.png';
import { useContext, useEffect, useState } from 'react';
import { context } from '../../Context';


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
  psychic: 'bg-psychic',

}
const PokemonCard = ({ name, id, pokemonImage, types }) => {
  const navigate = useNavigate();
  const pokemon = {
    name: name,
    id: id,
    pokemonImage: pokemonImage,
    types: types,
  };

  const { addPokemonToPokedex, removePokemonFromPokedex, pokedex, setShowModal } = useContext(context);
  const [isPokemonOnPokedex, setIsPokemonOnPokedex] = useState(false);

  useEffect(() => {
    setIsPokemonOnPokedex(pokedex.find((poke) => poke.id === pokemon.id))
  }, [pokedex]);

  const getBackgroundColor = (types) => {
    if (types.length > 0) {
      if (types[0].type.name === 'normal' && types[1]) {
        return backgroundColors[types[1].type.name] || 'bg-white';
      }
      return backgroundColors[types[0].type.name] || 'bg-white';
    }
    return 'bg-white';
  };

  return (
    <div className='w-4/5 h-64 relative'>
      <div className={`absolute bottom-0 w-full h-4/5 rounded-2xl  ${getBackgroundColor(types)}`}>
        <div className='p-5 flex flex-col'>
          <p className='text-white'>#{id < 10 ? `0${id}` : `${id}`}</p>
          <h1 className='text-white'>{name}</h1>
          <div className='flex flex-row'>
            {types.map((type) => (
              <img
                className='w-24 '
                key={type.type.name}
                src={PokemonTypes[type.type.name]}
                alt={type.type.name}
              />
            ))}
          </div>
        </div>
        <div className='flex justify-around'>
          <button
            onClick={() => GotoPokemonDetails(navigate, id)}
            className='m-5 underline text-white text-lg'
          >
            Detalhes
          </button>
          {!isPokemonOnPokedex ? <button
            className='w-36 h-9 border-none rounded-2xl pointer bg-white mt-2.5 z-50'
            onClick={() => (addPokemonToPokedex(pokemon), setShowModal(true))}
          >
            Capturar!
          </button>
            :
            <button
              className='w-36 h-9 border-none rounded-2xl pointer text-white bg-remove mt-2.5 z-50'
              onClick={() => removePokemonFromPokedex(pokemon)}
            >
              Remover!
            </button>}
        </div>
      </div>
      <img src={backgroundImage} className='absolute right-0 top-0 z-20 w-3/5' />
      <img src={pokemonImage} className='absolute right-0 z-30 w-2/5' />
    </div >
  );
};

export default PokemonCard;
