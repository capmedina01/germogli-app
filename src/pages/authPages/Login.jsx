import React from 'react'
import { RiMailLockLine } from "react-icons/ri";
import { RiLockPasswordLine } from "react-icons/ri";

export const Login = () => {
    return (
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center mb-6">Iniciar Sesion</h2>
            <form className="space-y-4">
                <div className="relative">
                    <RiMailLockLine className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                        type="email"
                        placeholder="Correo Electronico"
                        className="w-full pl-10 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                </div>
                <div className="relative">
                    <RiLockPasswordLine className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                        type="password"
                        placeholder="Contraseña"
                        className="w-full pl-10 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                </div>
                <div className="text-center">
                    <a href="/recoverPassword" className="text-blue text-sm">¿Olvidó su contraseña?</a>
                </div>
                <button
                    type="submit"
                    className="bg-primary text-white w-full py-2 rounded-md hover:bg-green-700 transition-colors"
                >
                    Iniciar Sesion
                </button>
                <div className="text-center text-sm">
                    <span className="text-gray-600">No tienes una cuenta? </span>
                    <a href="/register" className="text-blue">Registrarse</a>
                </div>
            </form>
        </div>
    )
}
