import React from 'react'
import './Home.css'
import {PokemonCard, PokemonList} from '../../components'

const Home = () => {
  return (
    <div className='container'>
        <div className='column'>
            <PokemonCard />
        </div>
        <div className='column'>
            <PokemonList />
        </div>
    </div>
  )
}

export default Home