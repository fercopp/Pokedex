import React, { useEffect, useState } from 'react'
import './PokemonOption.css'
import { usePokedexApi } from '../../hooks/usePokedexApi';

const PokemonOption = ({pokemon, isSelected, onSelect}) => {
    const {getSelectedPokemon} = usePokedexApi();

    const handleClick = () => {
        getSelectedPokemon(pokemon.name);
        onSelect(pokemon.name); 
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