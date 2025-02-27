import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../../features/users/hooks/context/AuthContext'


export const AuthLayout = ({ children }) => {
  const { token } = useContext(AuthContext);
  return token ? children : <Navigate to="/login" />;
  /*const authUser = JSON.parse(localStorage.getItem('authUser'))
  if(!authUser){
    return <Navigate to='/login'/>    
  }
  return 
    <Outlet/>*/
  
}
