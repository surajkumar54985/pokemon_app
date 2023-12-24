
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPokemon } from '../redux/actions';
import '../styles/ShowPokemon.css';
import '../styles/Modal.css';

const ShowPokemon = ({ pokemon, getPokemon, id }) => {
  useEffect(() => {
    getPokemon(id);
  }, []);


  if (pokemon.loading) {
    return <h1>Loading...</h1>;
  }
  
  if(!pokemon.loading)
  {
    return (
      <div className="row">
        <div className="col-md-6 poke-img">
          <h2>{pokemon.pokemon.name}</h2>
          <img src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.pokemon.id}.svg`} alt="img" style={{ width: '25rem' }} 
            className="modal-img"/>
        </div>
        <div className="col-md-6 card poke-card" style={{ width: '35rem' }}>
          <div className="height">
            <h5>HEIGHT</h5>
            <p>{pokemon.pokemon.height}</p>
          </div>
          <div className="weight">
            <h5>WEIGHT</h5>
            <p>{pokemon.pokemon.weight}</p>
          </div>
          <div className="experience">
            <h5>XP</h5>
            <p>{pokemon.pokemon.base_experience}</p>
          </div>
          <div className="abilities">
            <h5>ABILITIES</h5>
            {pokemon.pokemon.abilities ? pokemon.pokemon.abilities.map(ab => <span className="ability" key={ab.ability.name}>{ab.ability.name}</span>) : 'undefined' }
          </div>
          <div className="types" style={{ "margin-bottom": '10px'}}>
            <h5>Type</h5>
            {pokemon.pokemon.types ? pokemon.pokemon.types.map(type => <span className="type" key={type.type.name}>{type.type.name}</span>) : 'undefined' }
          </div>
        </div>
      </div>
    );
  };
}

ShowPokemon.propTypes = {
  pokemon: PropTypes.shape({}),
  getPokemon: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
};

const mapStateToProps = state => ({
  pokemon: state.pokemon,
});

export default connect(mapStateToProps, { getPokemon })(ShowPokemon);
