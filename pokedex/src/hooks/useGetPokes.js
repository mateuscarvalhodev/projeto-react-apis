// /* eslint-disable react-hooks/rules-of-hooks */
// import { useState } from "react";
// import { api } from '../services/api'
// import { useEffect } from "react";

// export default function useRequest(id, initialState) {
//   const [data, setData] = useState(initialState)
//   const [isLoading, setIsLoading] = useState(true)
//   const [pokemons, setPokemons] = useState([]);
//   const [page, setPage] = useState(0);
//   const [isDisableNext, setIsDisableNext] = useState(false);
//   const [isDisablePrevious, setIsDisablePrevious] = useState(true);

//   if (!id) {
//     useEffect(() => {
//       setIsLoading(true);
//       api.get('/pokemon', {
//         params: {
//           limit: 21,
//           offset: 21 * page,
//         },
//       })
//         .then((response) => {
//           const { next, previous, results } = response.data;
//           setIsDisableNext(!next);
//           setIsDisablePrevious(!previous);
  
//           const promises = results.map((result) => api.get(result.url));
//           Promise.all(promises).then((responses) => {
//             const pokemonData = responses.map((res) => res.data);
  
//             const imagePromises = pokemonData.map((pokemon) => {
//               const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;
//               return new Promise((resolve) => {
//                 const img = new Image();
//                 img.src = imageUrl;
//                 img.onload = resolve;
//               });
//             });
  
//             Promise.all(imagePromises)
//               .then(() => {
//                 setPokemons(pokemonData);
//                 setLoading(false);
//               })
//               .catch((err) => {
//                 console.log(err);
//                 setLoading(false);
//               });
//           });
//         });
//     }, [page]);
//   } else {
//     useEffect(() => {
//       api
//         .get(`/pokemon/${id}`)
//         .then((res) => {
//           setData(res.data)
//           setIsLoading(false)
//         });
//     }, []);
//   }


//   return { data, isLoading }
// }