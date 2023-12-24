import React, {useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPokemons } from '../redux/actions';
import Pokemon from '../components/Pokemon';
import SearchFilter from '../components/searchFilter';
import '../styles/Pokemon.css';

const PokemonList = ({
  getPokemons, pokemons
}) => {
  
  const [search, setSearch] = useState();
  const [searchInput, setSearchInput] = useState('');
  useEffect(() => {
    getPokemons();
  }, []);
  
  const handleSearchInputChange = (event) => {
    console.log(event.target.value);
    setSearch(event.target.value);
  };

  const searchFilter = (item) => {
    return item.name.toLowerCase().includes(searchInput.toLowerCase());
  };

  const filteredPokemons = () => (pokemons.filter(searchFilter));

  return pokemons === null ? <h1>Loading....</h1> : (
    <div>
      <SearchFilter searchInput={searchInput} setSearchInput={setSearchInput} handleSubmit={searchFilter} handleSearchInputChange={handleSearchInputChange} />
      <div className="row">
        {filteredPokemons().map(pokemon => (
          <Pokemon key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

PokemonList.propTypes = {
  pokemons: PropTypes.array.isRequired,
  getPokemons: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  pokemons: state.pokemon.pokemons,
  filter: state.filter,
});

export default connect(mapStateToProps, { getPokemons })(PokemonList);

