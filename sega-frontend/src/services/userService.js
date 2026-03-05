import axios from 'axios';
import { API_URL } from './config';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Interceptor para agregar token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Obtener todos los usuarios
export const getUsers = async (role = null) => {
  try {
    const url = role ? `/users?role=${role}` : '/users';
    const response = await api.get(url);
    return response.data.results;
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    throw error;
  }
};

// Obtener usuario por ID
export const getUserById = async (id) => {
  try {
    const response = await api.get(`/users/${id}`);
    return response.data.data;
  } catch (error) {
    console.error('Error al obtener usuario:', error);
    throw error;
  }
};

// Actualizar usuario
export const updateUser = async (id, userData) => {
  try {
    const response = await api.put(`/users/${id}`, userData);
    return response.data.data;
  } catch (error) {
    console.error('Error al actualizar usuario:', error);
    throw error;
  }
};

// Eliminar usuario
export const deleteUser = async (id) => {
  try {
    const response = await api.delete(`/users/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error al eliminar usuario:', error);
    throw error;
  }
};
