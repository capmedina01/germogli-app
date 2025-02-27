import React from 'react'

export const CreatePassword = () => {
  return (
    <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-center mb-6">
        <img src="/api/placeholder/150/150" alt="Create password illustration" className="w-32 h-32" />
      </div>
      <h2 className="text-2xl font-bold text-center mb-6">Crear Nueva contraseña</h2>
      <form className="space-y-4">
        <div className="relative">
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />

        </div>
        <div className="relative">
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />

        </div>
        <button
          type="submit"
          className="w-full py-2 bg-green-800 text-white rounded-md hover:bg-green-900 transition-colors"
        >
          Next
        </button>
      </form>
    </div>
  )
}
