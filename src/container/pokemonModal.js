import PropTypes from 'prop-types';
import '../styles/Modal.css';


import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPokemon } from '../redux/actions';
import '../styles/ShowPokemon.css';

const Modal = ({ pokemon, onClose }) => {
  useEffect(() => {
      getPokemon(pokemon.id);
  }, []);

  if (pokemon.loading) {
    return <h1>Loading...</h1>;
  }

  if(!pokemon.loading)
  {
    console.log(pokemon);
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <h2>{pokemon.name}</h2>
          <div className="modal-details">
            <img
              src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
              alt={pokemon.name}
              className="modal-img"
            />
            <div className="modal-info">
              <p>
                <strong>Height:</strong> {pokemon.height}
              </p>
              <p>
                <strong>Weight:</strong> {pokemon.weight}
              </p>
              <p>
                <strong>EXP:</strong> {pokemon.base_experience}
              </p>
              <div>
                <strong>Abilities:</strong>
                {pokemon.abilities ? (
                  <ul>
                    {pokemon.abilities.map((ab) => (
                      <li key={ab.ability.name}>{ab.ability.name}</li>
                    ))}
                  </ul>
                ) : (
                  'undefined'
                )}
              </div>
              <div>
                <strong>Types:</strong>
                {pokemon.types ? (
                  <ul>
                    {pokemon.types.map((type) => (
                      <li key={type.type.name}>{type.type.name}</li>
                    ))}
                  </ul>
                ) : (
                  'undefined'
                )}
              </div>
            </div>
          </div>
          <div className="modal-moves">
            <h3>Moves</h3>
            {pokemon.moves ? (
              <ul>
                {pokemon.moves.map((move) => (
                  <li key={move.move.name}>{move.move.name}</li>
                ))}
              </ul>
            ) : (
              'undefined'
            )}
          </div>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
)}};

Modal.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    height: PropTypes.number,
    weight: PropTypes.number,
    base_experience: PropTypes.number,
    abilities: PropTypes.array,
    types: PropTypes.array,
    moves: PropTypes.array,
  }),
  onClose: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
  pokemon: state.pokemon,
});

export default connect(mapStateToProps, { getPokemon })(Modal);
