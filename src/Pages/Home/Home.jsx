import React from 'react'
import './Home.css'
import {PokemonCard, PokemonCardModal, PokemonList} from '../../components'
import { usePokedexApi } from '../../hooks/usePokedexApi'

const Home = () => {
  const {isCardModalOpen} = usePokedexApi()
  
  return (
    <div className='container'>
        <div className='column'>
            <PokemonCard />
        </div>
        <div className='column pokemon-list'>
            <PokemonList />
        </div>
        {isCardModalOpen && <PokemonCardModal />}
    </div>
  )
}

export default Home