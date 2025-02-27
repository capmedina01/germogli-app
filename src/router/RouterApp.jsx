import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'

import { LoginPage } from '../pages/LoginPage'
import { RegisterPage } from '../pages/RegisterPage'

import { CreatePassword } from '../features/users/pages/CreatePassword'
import { RecoverPassword } from '../features/users/pages/RecoverPassword'
import { AuthLayout } from '../UI/layouts/AuthLayout'

export const RouterApp = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<LoginPage/> } />
            <Route path='/register' element={<RegisterPage/>} />
            <Route element={<AuthLayout/>}>
            <Route path='/createPassword/:id' element={<CreatePassword/>} />
            <Route path='/recoverPassword' element={<RecoverPassword/>} />            
            </Route>
        </Routes>
    )
}
