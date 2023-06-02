/* eslint-disable react/prop-types */
import {
  BackgroundImage,
  ButtonContent,
  ButtonDetails,
  ButtonGet,
  Container,
  ContentCard,
  Details,
  Img,
} from "./styles";
import charmander from "../../assets/img/charmander.svg";
import fireType from "../../assets/pokemonTypes/fire.png";
import backgroundImage from "../../assets/img/pngwing 1.png";
import { GotoPokemonDetails } from "../../services/coordination";
import { useNavigate } from "react-router-dom";
const PokemonCard = ({ name, id }) => {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <ContentCard>
          <Details>
            <p>{`#${id}`}</p>
            <h1>{name}</h1>
            <img src={fireType} alt="fireType" />
          </Details>
          <ButtonContent>
            <ButtonDetails onClick={() => GotoPokemonDetails(navigate)}>
              Detalhes
            </ButtonDetails>
            <ButtonGet>Capturar!</ButtonGet>
          </ButtonContent>
        </ContentCard>
        <BackgroundImage src={backgroundImage} />
        <Img src={charmander} />
      </Container>
    </>
  );
};

export default PokemonCard;
