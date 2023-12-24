import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import PokemonList from '../container/PokemonList';
import Modal from '../container/pokemonModal';
import '../styles/App.css';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalPokemon, setModalPokemon] = useState(null);

  const openModal = (pokemon) => {
    setModalOpen(true);
    setModalPokemon(pokemon);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalPokemon(null);
  };

  return (
    <Router>
    <nav>
      <NavLink to={"/"}>Home</NavLink>
    </nav>
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={<PokemonList openModal={openModal} />}
          />
        </Routes>
        {modalOpen && modalPokemon && (
          <Modal pokemon={modalPokemon} onClose={closeModal} />
        )}
      </div>
    </Router>
  );
}

export default App;
