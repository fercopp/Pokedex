import React, { useEffect, useState } from 'react'
import { usePokedexApi } from '../../hooks/usePokedexApi'
import './PokemonList.css'
import {PokemonOption} from '../../components'

const PokemonList = () => {
    
    const {getPokemons, pokemons, isLoadingPokemonList, getSelectedPokemon} = usePokedexApi()
    
    useEffect(()=>{
        getPokemons()
    },[])

    return (
        <>
            {isLoadingPokemonList ? 'Loading...' : 
                <div className='pokemonGrid'>
                    {pokemons?.results?.map((pokemon, index)=>{
                        return (
                            <PokemonOption pokemon={pokemon} key={index}/>
                        )
                    })}
                </div>
            }
        </>
    )
}

export default PokemonList