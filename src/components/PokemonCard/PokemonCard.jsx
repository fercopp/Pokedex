import React from 'react'
import './PokemonCard.css'
import { usePokedexApi } from '../../hooks/usePokedexApi'
import pokemonSilhoutte from '/assets/img/pokemon-silhoutte.png'

const PokemonCard = () => {
    const {selectedPokemon} = usePokedexApi()

    return (
        <div className='pokemon-view-container'>
            {!Object.keys(selectedPokemon).length ? 
                <div className='empty-pokemon-container'>
                {/* selectedPokemon object is empty */}
                    <img className='silhoute-image' src={pokemonSilhoutte} alt="Pokemon Silhoutte Image" />
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