import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { Login } from '../pages/authPages/Login'
import { Register } from '../pages/authPages/Register'
import { CreatePassword } from '../pages/authPages/CreatePassword'
import { RecoverPassword } from '../pages/authPages/RecoverPassword'
import { AuthLayout } from '../UI/layouts/AuthLayout'

export const RouterApp = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route element={<AuthLayout/>}>
            <Route path='/createPassword/:id' element={<CreatePassword/>} />
            <Route path='/recoverPassword' element={<RecoverPassword/>} />            
            </Route>
            

        </Routes>
    )
}
