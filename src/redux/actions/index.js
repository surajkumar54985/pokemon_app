import axios from 'axios';
import { GET_POKEMONS, GET_POKEMON, CHANGE_FILTER } from '../constants/actionTypes';
export const getPokemons = () => async dispatch => {
  try {
    const allPokemon = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1000');
    const pokemonData = await Promise.all(allPokemon.data.results.map(async pokemon => {
      const pokemonRecord = await axios.get(pokemon.url);
      return pokemonRecord.data;
    }));
    console.log("match");
    dispatch({
      type: GET_POKEMONS,
      payload: pokemonData,
    });
  } catch (err) {
    dispatch({
      err,
    });
  }
};

export const getPokemon = (id) => async dispatch => {
  try {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const specificPokemonData = (res.data);
    dispatch({
      type: GET_POKEMON,
      payload: specificPokemonData,
    });
  } catch (err) {
    dispatch({
      err,
    });
  }
};

export const changeFilter = filter => ({
  type: CHANGE_FILTER,
  filter,
});