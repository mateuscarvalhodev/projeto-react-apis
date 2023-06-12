export const GoToDashBoard = (navigate) => {
  navigate('/');
};

export const GoToPokedex = (navigate) => {
  navigate('/pokedex');
};

export const GotoPokemonDetails = (navigate, id) => {
  navigate(`/PokemonDetails/${id}`);
};
