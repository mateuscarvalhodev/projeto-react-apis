/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import {
  Button,
  Container,
  Image,
  ButtonBackToHome,
  Spacer,
  DeletePokemonFromPokedex,
  AddPokemonToPokedexButton,
} from './styles';
import logo from '../../assets/img/logo.png';
import { useLocation, useNavigate } from 'react-router-dom';
import { GoToDashBoard, GoToPokedex } from '../../services/coordination';
import { useContext, useEffect, useState } from 'react';
import { context } from '../../Context';



const Header = () => {
  const { addPokemonToPokedex, removePokemonFromPokedex, pokedex, pokemonFromHeader } = useContext(context);
  console.log(pokemonFromHeader);

  const navigate = useNavigate();
  const location = useLocation();

  const [isPokemonOnPokedex, setIsPokemonOnPokedex] = useState(false);

  useEffect(() => {
    setIsPokemonOnPokedex(pokedex.find((poke) => poke.id === pokemonFromHeader.id))
  })

  const renderBackButton = () => {
    if (location.pathname !== '/') {
      return (
        <ButtonBackToHome onClick={() => GoToDashBoard(navigate)}>
          <p>Todos Pokemons</p>
        </ButtonBackToHome>
      );
    } else {
      return <Spacer />;
    }
  };

  const renderActionButton = () => {
    if (location.pathname.includes('/PokemonDetails')) {
      if (isPokemonOnPokedex) {
        return (
          <DeletePokemonFromPokedex
            onClick={() => removePokemonFromPokedex(pokemonFromHeader)}
          >Excluir da Pokédex</DeletePokemonFromPokedex>
        );
      } else {
        return (
          <AddPokemonToPokedexButton
            onClick={() => addPokemonToPokedex(pokemonFromHeader)}
          >Capturar</AddPokemonToPokedexButton>
        )
      }

    } else {
      return <Button onClick={() => GoToPokedex(navigate)}>Pokedéx</Button>;
    }
  };

  return (
    <>
      <Container>
        {renderBackButton()}
        <Image src={logo} />
        {renderActionButton()}
      </Container>
    </>
  );
};

export default Header;
