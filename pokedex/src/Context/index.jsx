/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react"

export const context = createContext();
const ContextProvider = ({ children }) => {
  const [pokedex, setPokedex] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowModal(false);
    }, 2000)
  }, [showModal])

  const addPokemonToPokedex = (pokemon) => {
    setPokedex([...pokedex, pokemon])
  }
  const removePokemonFromPokedex = (pokemon) => {
    setPokedex(pokedex.filter(poke => poke.id !== pokemon.id));
  }
  const [pokemonFromHeader, setPokemonFromHeader] = useState({});
  return (
    <context.Provider
      value={{ pokedex, addPokemonToPokedex, removePokemonFromPokedex, pokemonFromHeader, setPokemonFromHeader, showModal, setShowModal }}>
      {children}
    </context.Provider>
  )
}

export default ContextProvider;
