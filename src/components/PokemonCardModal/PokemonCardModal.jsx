import React from 'react';
import './PokemonCardModal.css';
import { usePokedexApi } from '../../hooks/usePokedexApi';

const PokemonCardModal = () => {
    const {openCardModal, selectedPokemon} = usePokedexApi()
    const {name} = selectedPokemon;
    return (
        <div className="modal-overlay">
        <div className="modal-content">
            <button className="modal-close" onClick={()=> openCardModal(false)}>X</button>
            <p>{name}</p>
        </div>
        </div>
    );
}

export default PokemonCardModal;