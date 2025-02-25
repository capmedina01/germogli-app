import { createContext, useState, useEffect } from "react";
import { login as apiLogin } from "../../services/AuthApi";
import Swal from "sweetalert2";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  useEffect(() => {
    if (token) {
      setUser({ email: "usuario@example.com" }); // Simulación de usuario autenticado
    }
  }, [token]);

  const handleLogin = async (email, password) => {
    try {
      const data = await apiLogin(email, password);
      setToken(data.token);
      localStorage.setItem("token", data.token);
      setUser({ email });
      Swal.fire("¡Éxito!", "Inicio de sesión correcto", "success");
    } catch (error) {
      Swal.fire("Error", error.message || "Credenciales incorrectas", "error");
    }
  };

  const handleLogout = () => {
    setUser(null);
    setToken("");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, token, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};