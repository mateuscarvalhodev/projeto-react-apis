import charmander from "../../assets/img/charmander.svg";
import imgBackground from "../../assets/img/pngwing 1.png";
import fireType from "../../assets/pokemonTypes/fire.png";
import normalType from "../../assets/pokemonTypes/normal.png";
import {
  Container,
  ImgBackground,
  ImgPokemon,
  LeftPanel,
  MiddlePanel,
  PokemonAttacks,
  PokemonInfos,
  PokemonTypes,
  ProgressBar,
  RightPanel,
  Stats,
  StatsContainer,
} from "./styles";

const PokemonDetails = () => {
  const status = [45, 49, 49, 65, 65, 45];
  return (
    <>
      <h1>Detalhes</h1>
      <Container>
        <ImgPokemon src={charmander} alt="charmander" />
        <LeftPanel>
          <div className="box1">
            <p>oi</p>
          </div>
          <div className="box1">
            <p>oi</p>
          </div>
        </LeftPanel>
        <MiddlePanel>
          <div className="box2">
            <StatsContainer>
              <h2>Base stats</h2>
              <Stats>
                <span>HP</span>
                <span>{status[0]}</span>

                <ProgressBar stat={status[0]}></ProgressBar>
              </Stats>
              <Stats>
                <span>Attack</span>
                <span>{status[1]}</span>
                <ProgressBar stat={status[1]}></ProgressBar>
              </Stats>
              <Stats>
                <span>Defense</span>
                <span>{status[2]}</span>
                <ProgressBar stat={status[2]}></ProgressBar>
              </Stats>
              <Stats>
                <span>Sp. Atk</span>
                <span>{status[3]}</span>
                <ProgressBar stat={status[3]}></ProgressBar>
              </Stats>
              <Stats>
                <span>Sp. Def</span>
                <span>{status[4]}</span>
                <ProgressBar stat={status[4]}></ProgressBar>
              </Stats>
              <Stats>
                <span>Speed</span>
                <span>{status[5]}</span>
                <ProgressBar stat={status[5]}></ProgressBar>
              </Stats>
              <Stats>
                <p>Total</p>
                <span>318</span>
              </Stats>
            </StatsContainer>
          </div>
        </MiddlePanel>
        <RightPanel>
          <PokemonInfos>
            <h2>#01</h2>
            <h2>Charmander</h2>
            <PokemonTypes>
              <img src={fireType} alt="fireType" />
              <img src={normalType} alt="normalType" />
            </PokemonTypes>
            <PokemonAttacks>
              <h2>Moves:</h2>
            </PokemonAttacks>
          </PokemonInfos>
          <ImgBackground src={imgBackground} />
        </RightPanel>
      </Container>
    </>
  );
};
export default PokemonDetails;
