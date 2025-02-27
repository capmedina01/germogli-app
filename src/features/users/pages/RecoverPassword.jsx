import React from 'react'

export const RecoverPassword = () => {
  return (
    <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-center mb-6">

      </div>
      <h2 className="text-2xl font-bold text-center mb-2">Recuperar contraseña</h2>
      <p className="text-center text-gray-600 text-sm mb-6">
        ¿Has perdido tu contraseña? Introduce tu correo de cuenta y te enviaremos un correo con todas las instrucciones por correo electrónico.
      </p>
      <form className="space-y-4">
        <div>
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <button
          type="submit"
          className="bg-primary text-white w-full py-2 rounded-md hover:bg-green-700 transition-colors"
        >
          Recuperar contraseña
        </button>
      </form>
    </div>
  )
}
