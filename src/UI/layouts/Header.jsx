import React from 'react'
import { Logo } from '../components/Logo'
import imgLogo from '../../assets/logo.png'
import { Navbar } from '../components/Navbar'
import { ItemsNavbar } from '../components/ItemsNavbar'



export const Header = () => {
  return (
    <div>
        <header className='bg-primary flex justify-around items-center' >
            <Logo filePath={imgLogo} alt="Logo_header" styleLogo="h-32 w-40" />
            <Navbar />
            <ItemsNavbar text="Login" link="/login" style="text-white bg-secondary px-4 py-2 rounded-full" />
        </header>
    </div>
  )
}
