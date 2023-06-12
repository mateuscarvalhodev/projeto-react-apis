import {
  Button,
  Container,
  Image,
  ButtonBackToHome,
  Spacer,
  DeletePokemonFromPokedex,
} from './styles';
import logo from '../../assets/img/logo.png';
import { useLocation, useNavigate } from 'react-router-dom';
import { GoToDashBoard, GoToPokedex } from '../../services/coordination';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

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
    if (location.pathname === '/PokemonDetails') {
      return (
        <DeletePokemonFromPokedex>Excluir da Pokédex</DeletePokemonFromPokedex>
      );
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
