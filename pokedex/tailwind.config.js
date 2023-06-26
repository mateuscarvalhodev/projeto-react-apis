/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        grass: '#729F92',
        fire: '#ffa756',
        water: '#58abf6',
        poison: '#9f6e97',
        normal: '#b5b9c4',
        bug: '#8bd674',
        flying: '#748fc9',
        electric: '#f2cb55',
        ground: '#f78551',
        fighting: '#c03028',
        rock: '#b8a038',
        ice: '#98d8d8',
        ghost: '#705898',
        steel: '#b8b8d0',
        dragon: '#7038f8',
        dark: '#705848',
        fairy: '#ee99ac',
        psychic: '#f85888',
        remove:'#B22222'
      },
      spacing: {
        '500px': '500px'
      }
    },
  },
  plugins: [],
}

