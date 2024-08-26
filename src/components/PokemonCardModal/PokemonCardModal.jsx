import React from 'react';
import './PokemonCardModal.css';
import { usePokedexApi } from '../../hooks/usePokedexApi';

const PokemonCardModal = () => {
    const { openCardModal, selectedPokemon } = usePokedexApi()

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={() => openCardModal(false)}><span class="material-symbols-rounded">
                    close
                </span></button>

                <h2 className='title-card'>{selectedPokemon.name.toUpperCase()}</h2>
                {
                    selectedPokemon.types.map(item => {
                        return (
                            <div className='container-type'>{item.type.name}</div>
                        )
                    })
                }

                <div className='container-top-card'>
                    <img className='pokemon-ball' src="/assets/img/pokemon-ball.png" alt="" />
                    <div className='container-pokemon-image'>
                        <img className='pokemon-image' src={selectedPokemon?.sprites?.other["official-artwork"]?.front_default} alt={'logo'} />
                    </div>
                </div>

                <div className='container-info'>
                    <h3 className='sub-title'>Abilities</h3>
                    {
                        selectedPokemon.abilities.map(item => {
                            return (
                                <div className='container-abilities'>{item.ability.name}</div>
                            )
                        })
                    }

                    <h3 className='sub-title'>Stats</h3>
                    {
                        selectedPokemon.stats.map(item => {
                            return (
                                <>
                                    <div className='container-stats'>
                                        <p className='text-stat'>{item.stat.name}</p>
                                        <div className='line-wrapper'>
                                            <hr></hr>
                                        </div>
                                        <div className='container-value'>
                                            <p>{item.base_stat}</p>
                                        </div>
                                    </div>
                                </>

                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default PokemonCardModal; 