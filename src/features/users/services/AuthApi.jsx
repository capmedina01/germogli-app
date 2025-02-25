import axios from "axios";

const API_URL = "https://reqres.in/api"; // Reemplaza con tu API

const authApi = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const login = async (email, password) => {
  try {
    const response = await authApi.post("/login", { email, password });
    return response.data;
  } catch (error) {
    throw error.response?.data || "Error en la autenticación";
  }
};

export const register = async (userData) => {
  try {
    const response = await authApi.post("/register", userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || "Error en el registro";
  }
};
