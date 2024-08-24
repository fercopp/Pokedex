import React, { useEffect } from 'react'
import './PokemonCard.css'
import { usePokedexApi } from '../../hooks/usePokedexApi'

const PokemonCard = () => {
    const {selectedPokemon} = usePokedexApi()
    // useEffect(()=>{
    //     console.log(selectedPokemon)
    // }, [selectedPokemon.id])
    return (
        <div className='pokemon-view-container'>
            {!Object.keys(selectedPokemon).length ? 
                <div>
                {/* selectedPokemon object is empty */}
                    <h3>Please select a Pokemon</h3>
                </div>
                : 
                <div className='picture-container'>
                {/* Show selected Pokemon */}
                    <h5 className='pokemon-name-title'>{selectedPokemon.name.toUpperCase()}</h5>
                    <img className='pokemon-picture' src={selectedPokemon?.sprites?.other["official-artwork"]?.front_default} alt={'logo'} />
                </div>
            }
        </div>
    )
}

export default PokemonCard