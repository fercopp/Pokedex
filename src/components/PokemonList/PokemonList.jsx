import React, { useEffect, useState } from 'react'
import { usePokedexApi } from '../../hooks/usePokedexApi'
import './PokemonList.css'
import {PokemonOption} from '../../components'

const PokemonList = () => {
    
    const {getPokemons, pokemons, isLoadingPokemonList, getSelectedPokemon} = usePokedexApi()
    const [selectedPokemon, setSelectedPokemon] = useState(null);

    useEffect(()=>{
        getPokemons()
    },[])

    const handleSelection = (pokemonName) => {
        setSelectedPokemon(pokemonName); // Update the selected pokemon
    };

    return (
        <>
            {isLoadingPokemonList ? 'Loading...' : 
                <div className='pokemonGrid'>
                    {pokemons?.results?.map((pokemon, index)=>{
                        return (
                            <PokemonOption pokemon={pokemon} key={index} isSelected={selectedPokemon === pokemon.name} onSelect={handleSelection}/>
                        )
                    })}
                </div>
            }
        </>
    )
}

export default PokemonList