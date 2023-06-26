import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  background-color: #fff;
  width: 100vw;
  height: 160px;
  grid-template-columns: auto 1fr auto;
  grid-gap: 16px;
  justify-items: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 307px;
  height: 113px;
`;

export const ButtonBackToHome = styled.button`
  width: 287px;
  height: 74px;
  background: none;
  border: none;
  border-radius: 8px;
  color: #000;
  font-weight: 700;
  font-size: 24px;
  text-decoration: underline black;
`;
export const Spacer = styled.div`
  width: 287px;
  height: 74px;
`;

export const Button = styled.button`
  width: 287px;
  height: 74px;
  background: #33a4f5;
  border: none;
  border-radius: 8px;
  color: #fff;
  font-weight: 700;
  font-size: 24px;
  margin-left: auto;
  margin-right: 32px;
`;
export const DeletePokemonFromPokedex = styled.button`
  width: 287px;
  height: 74px;
  background: #FF6262;
  border: none;
  border-radius: 8px;
  color: #fff;
  font-weight: 700;
  font-size: 24px;
  margin-left: auto;
  margin-right: 32px;
`;

export const AddPokemonToPokedexButton = styled.button`
width: 287px;
  height: 74px;
  background: #33a4f5;
  border: none;
  border-radius: 8px;
  color: #fff;
  font-weight: 700;
  font-size: 24px;
  margin-left: auto;
  margin-right: 32px;
`;
