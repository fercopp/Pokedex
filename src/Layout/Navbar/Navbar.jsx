import React from 'react'
import './Navbar.css'
import pokemonLogo from '/assets/img/pokemon-logo.png'
const Navbar = () => {
  return (
    <div className='navbar-container'>
        <img className='pokemon-logo' src={pokemonLogo} alt="Pokemon Logo" />
    </div>
  )
}

export default Navbar