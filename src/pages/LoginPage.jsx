import React from 'react'
import { useContext, useState } from 'react'
import { AuthContext } from '../features/users/hooks/context/AuthContext'
import { RiMailLockLine } from "react-icons/ri";
import { RiLockPasswordLine } from "react-icons/ri";

export const LoginPage = () => {
    const { handleLogin } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      return Swal.fire("Error", "Todos los campos son obligatorios", "error");
    }
    await handleLogin(email, password);
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white shadow-md rounded-md">
      <h2 className="text-lg font-bold">Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded-md my-2"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded-md my-2"
        />
        <button type="submit" className="w-full bg-secondary text-white p-2 rounded-md">
          Iniciar sesión
        </button>
      </form>
    </div>
  );

    /*
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
  )*/
}
