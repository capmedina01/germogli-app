import React from 'react'
import { RiMailLockLine } from "react-icons/ri";
import { RiLockPasswordLine } from "react-icons/ri";

export const RegisterPage = () => {
  return (
    <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center mb-6">Registro de Usuario</h2>
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
                    <div className="relative">
                        <RiLockPasswordLine className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="password"
                            placeholder="Confirmar Contraseña"
                            className="w-full pl-10 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>
                    
                    <button
                        type="submit"
                        className="bg-primary text-white w-full py-2 rounded-md hover:bg-green-700 transition-colors"
                    >
                        Registrarse
                    </button>
                    <div className="text-center text-sm">
                        <span className="text-gray-600">Ya tienes una cuenta? </span>
                        <a href="/login" className="text-blue">Inicia sesion</a>
                    </div>
                </form>
            </div>
  )
}
