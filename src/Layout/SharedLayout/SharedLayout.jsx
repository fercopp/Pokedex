import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './SharedLayout.css'

const SharedLayout = ({children}) => {
  return (
    <>
        <Navbar/>
        <div className='layout'>
            {children}
        </div>
        <Footer/>
    </>
  )
}

export default SharedLayout