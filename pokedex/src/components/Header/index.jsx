import { Button, Container, Image, ButtonBackToHome } from "./styles";
import logo from "../../assets/img/logo.png";
import { useNavigate } from "react-router-dom";
import { GoToDashBoard, GoToPokedex } from "../../services/coordination";
const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <ButtonBackToHome onClick={() => GoToDashBoard(navigate)}>
          <p>Todos Pokemons</p>
        </ButtonBackToHome>
        <Image src={logo} />
        <Button onClick={() => GoToPokedex(navigate)}>Pokedéx</Button>
      </Container>
    </>
  );
};

export default Header;
