import React from 'react'
import { NavLink } from 'react-router-dom/'
import './NavLinks.css'

const NavLinks = () => {
  return (
    <ul className='nav-links'>
      <li>
      <NavLink to='/'>
          All Users.
        </NavLink>
        <NavLink to='/'>
          My Places
        </NavLink>
        <NavLink to='/'>
          Add Place
        </NavLink>
        <NavLink to=''>
          Authenticate
        </NavLink>
      </li>
    </ul>
  )
}

export default NavLinks