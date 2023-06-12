import Header from '../components/Header';
import Dashboard from '../pages/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Pokedex from '../pages/Pokedex';
import PokemonDetails from '../pages/PokemonDetails/';

export const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path='/pokedex' element={<Pokedex />} />
        <Route path='/pokemonDetails/:id?' element={<PokemonDetails />} />
      </Routes>
    </BrowserRouter>
  );
};
