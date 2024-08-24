import React, { useEffect } from 'react'
import './PokemonOption.css'
import { usePokedexApi } from '../../hooks/usePokedexApi';

const PokemonOption = ({pokemon}) => {
    const {getSelectedPokemon} = usePokedexApi();

    return (
        <div onClick={()=> getSelectedPokemon(pokemon.name)} className='pokemonContainer'>
            {pokemon.name.toUpperCase()}
        </div>
    )
}

export default PokemonOption