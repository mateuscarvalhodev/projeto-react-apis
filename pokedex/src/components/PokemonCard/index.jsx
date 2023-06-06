/* eslint-disable react/prop-types */
import PokemonTypes from "../../pokemonTypes";
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
import backgroundImage from "../../assets/img/pngwing 1.png";
import { GotoPokemonDetails } from "../../services/coordination";
import { useNavigate } from "react-router-dom";
const PokemonCard = ({ name, id, pokemonImage, types }) => {
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <ContentCard types={types}>
          <Details>
            <p>{`#${id}`}</p>
            <h1>{name}</h1>
            {types.map((type) => (
              <img
                key={type.type.name}
                src={PokemonTypes[type.type.name]}
                alt={type.type.name}
              />
            ))}
          </Details>
          <ButtonContent>
            <ButtonDetails onClick={() => GotoPokemonDetails(navigate)}>
              Detalhes
            </ButtonDetails>
            <ButtonGet>Capturar!</ButtonGet>
          </ButtonContent>
        </ContentCard>
        <BackgroundImage src={backgroundImage} />
        <Img src={pokemonImage} />
      </Container>
    </>
  );
};

export default PokemonCard;
