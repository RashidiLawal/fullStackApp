import React from 'react'
import { NavLink } from 'react-router-dom/'
import './NavLinks.css'

const NavLinks = () => {
  return (
    <ul className='nav-links'>
      <li>
      <NavLink to='/' exact>
          All Users
        </NavLink>
        <NavLink to='/u1/places'>
          My Places
        </NavLink>
        <NavLink to='/places/new'>
          Add Place
        </NavLink>
        <NavLink to='/auth'>
          Authenticate
        </NavLink>
      </li>
    </ul>
  )
}

export default NavLinks