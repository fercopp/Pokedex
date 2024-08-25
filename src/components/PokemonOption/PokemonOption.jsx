import React, { useEffect, useState } from 'react'
import './PokemonOption.css'
import { usePokedexApi } from '../../hooks/usePokedexApi';

const PokemonOption = ({pokemon, isSelected, onSelect}) => {
    const {getSelectedPokemon, openCardModal} = usePokedexApi();

    const handleClick = () => {
      // First time clicking
      if(!isSelected){
        getSelectedPokemon(pokemon.name);
        onSelect(pokemon.name); 
      }
      // Second time clicking
      else{
        openCardModal(true)
      }
    };

    return (
      <button
        onClick={handleClick}
        className={`pokemonContainer ${isSelected ? 'selected' : ''}`}
      >
        {pokemon.name.toUpperCase()}
      </button>
  );
}

export default PokemonOption