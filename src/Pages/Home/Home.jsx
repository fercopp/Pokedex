import React from 'react'
import './Home.css'
import {PokemonView, PokemonList} from '../../components'

const Home = () => {
  return (
    <div className='container'>
        <div className='column'>
            <PokemonView />
        </div>
        <div className='column'>
            <PokemonList />
        </div>
    </div>
  )
}

export default Home