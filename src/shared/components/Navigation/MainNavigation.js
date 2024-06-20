import React from 'react'
import './MainNavigation.css'
import MainHeader from './MainHeader'

const MainNavigation = () => {
  return (
    <MainHeader>
        <button className='main-navigation__menu-btn'>
        <span></span>
        <span></span>
        <span></span>
        </button>
    </MainHeader>
  )
}

export default MainNavigation