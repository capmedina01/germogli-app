import React from 'react'
import { ItemsNavbar } from './ItemsNavbar'

export const Navbar = () => {
  return (
    <nav className='flex space-x-6 p-4'>
        <ul className='flex space-x-6'>
            <ItemsNavbar text="Home" link="/" style="navbar-item text-white" />            
        </ul>
    </nav>
  )
}
