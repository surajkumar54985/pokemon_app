import React, { useState } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import '../styles/Pokemon.css';
import ShowPokemon from '../container/ShowPokemon';

const Pokemon = ({ pokemon }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="col-md-4 mb-3">
      <div className="card text-center"
            onClick={openModal}>
        <img
          src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
          className="card-img-top"
          alt={pokemon.name}
        />
        <div className="card-body">
          <h5 className="card-title" style={{"font-size": "2.8em"}}>{pokemon.name}</h5>
          <p className="card-text">#{pokemon.id}</p>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Pokemon Details"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <div>
          <ShowPokemon id={pokemon.id} />
          <button onClick={closeModal}>Close</button>
        </div>
      </Modal>
    </div>
  );
};

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
};

export default Pokemon;
