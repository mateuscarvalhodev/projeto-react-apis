import { useState } from "react";
import imgBackground from "../../assets/img/pngwing 1.png";

import {
  Attacks,
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
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import LoadingIndicator from "../../LoadingIndicator";
import pokemonTypes from "../../pokemonTypes";


const PokemonDetails = () => {
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState()
  let moveCount = 0;
  let total = 0;
  if (!loading) {
    for (const stat of pokemon.stats) {
      total += stat.base_stat;
    }
  }
  const id = useParams()
  useEffect(() => {

    console.log(id);
    api.get(`/pokemon/${id.id}`).then((res) => {
      setPokemon(res.data);
      setLoading(false);
    }).catch((err) => {
      console.log(err);
    })
  }, [])
  if (loading) {
    return <LoadingIndicator />;
  }
  console.log(pokemon);
  return (
    <>
      <h1>Detalhes</h1>
      <Container types={pokemon.types}>
        <ImgPokemon src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.id} />
        <LeftPanel>
          <div className="box1">
            <img src={pokemon.sprites.front_default} alt={pokemon.id} />
          </div>
          <div className="box1">
            <img src={pokemon.sprites.back_default} alt={pokemon.id} />
          </div>
        </LeftPanel>
        <MiddlePanel>
          <div className="box2">
            <StatsContainer>
              <h2>Base stats</h2>
              {pokemon.stats.map((stat) => (
                <Stats key={stat.stat.name}>
                  <span>{stat.stat.name}</span>
                  <span>{stat.base_stat}</span>

                  <ProgressBar stat={stat.base_stat}></ProgressBar>
                </Stats>
              ))}

              <Stats>
                <p>Total</p>
                <span>{total}</span>
              </Stats>
            </StatsContainer>
          </div>
        </MiddlePanel>
        <RightPanel>
          <PokemonInfos>
            <h2>#{pokemon.id}</h2>
            <h2>{pokemon.name}</h2>
            <PokemonTypes>
              {pokemon.types.map((type) => {
                return (
                  <img
                    src={pokemonTypes[type.type.name]}
                    key={type.type.name}
                  />
                );
              })}
            </PokemonTypes>
            <PokemonAttacks>
              <h2>Moves:</h2>
              <Attacks>
                {pokemon.moves.map((move, index) => {
                  if (moveCount < 5) {
                    moveCount += 1;
                    return <p key={index}>{move.move.name}</p>;
                  }
                })}
              </Attacks>
            </PokemonAttacks>
          </PokemonInfos>
          <ImgBackground src={imgBackground} />
        </RightPanel>
      </Container>
    </>
  );
};
export default PokemonDetails;
