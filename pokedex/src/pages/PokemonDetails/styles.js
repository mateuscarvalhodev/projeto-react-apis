import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
  margin: auto;
  width: 90%;
  height: 60vh;
  border-radius: 32px;
  background: #EAAB7D;
  margin-top: 20px;
`;

export const ImgPokemon = styled.img`
  position: absolute;
  right: 0;
  top: -20%;
`;

export const LeftPanel = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 20px;
  .box1 {
    width: 60%;
    height: 230px;
    background: #fff;
    border-radius: 8px;
  }
`;
export const MiddlePanel = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  .box2 {
    width: 90%;
    height: 90%;
    background: #fff;
    border-radius: 8px;
    /* border: 1px solid red; */
  }
`;
export const StatsContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2%;
  border-radius: 0.4vw;
  h2 {
    font-size: 2.5vw;
    font-weight: bolder;
    font-family: "Inter", sans-serif;
  }
`;
export const Stats = styled.div`
  display: flex;
  align-items: center;
  gap: 2%;
  width: 100%;
  margin-top: 3%;
  font-size: 1vw;
  border-top: 0.1vw dashed rgba(245, 222, 179, 0.5);
  border-bottom: 0.1vw dashed rgba(245, 222, 179, 0.5);
  padding: 2% 0 2% 0;
  text-align: right;
  span:nth-child(1) {
    width: 30%;
    padding-right: 2%;
  }
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  &::before {
    border-radius: 2vw;
    content: "";
    width: calc(${(props) => props.stat} * 1%);
    background-color: hsl(calc(${(props) => props.stat} * 0.8), 70%, 50%);
  }
`;
export const RightPanel = styled.div`
  flex: 2;
  border: 1px solid red;
  width: 50%;
`;

export const ImgBackground = styled.img`
width: 100%;
height: 100%;
object-fit: cover;

`;

export const PokemonInfos = styled.div`
margin: 10px;
color: #fff;
/* gap: 30px; */

`;
export const PokemonTypes = styled.div`
display: flex;
gap: 10px;

`;

export const PokemonAttacks = styled.div`
background: #fff;
color: #000;
height: 360px;
width: 300px;
margin-top: 50px;
border-radius: 8px;
h2 {
  padding: 10px;
}
`;