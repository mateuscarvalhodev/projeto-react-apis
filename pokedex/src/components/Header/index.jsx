import { Button, Container, Image, ButtonBackToHome } from "./styles";
import logo from "../../assets/img/logo.png";
const Header = () => {
  return (
    <>
      <Container>
        <ButtonBackToHome>Todos Pokemon</ButtonBackToHome>
        <Image src={logo} />
        <Button>Pokedéx</Button>
      </Container>
    </>
  );
};

export default Header;
