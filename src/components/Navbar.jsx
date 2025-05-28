import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src='LOGO7png' alt='' />
      <div className='nav-list'>


      
          <Link to={'/'}>
              Home
          </Link>
          <Link to={'/menu'}>
              Menu
          </Link>
          <Link to={'/order'}>
              Order
          </Link>
      </div>
      <div className='/dollor'>


     


        
      </div>
    </div>
  )
}

export default Navbar
