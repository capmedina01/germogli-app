import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export const AuthLayout = ({ children }) => {
  const authUser = JSON.parse(localStorage.getItem('authUser'))
  if(!authUser){
    return <Navigate to='/login'/>    
  }
  return 
    <Outlet/>
  
}
