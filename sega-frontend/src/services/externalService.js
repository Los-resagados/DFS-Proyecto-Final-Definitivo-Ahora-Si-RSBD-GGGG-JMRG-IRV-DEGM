// src/services/externalService.js
import { API_URL } from "./config";

const BASE_URL = API_URL + "/api/external";

export const getGamingNews = async () => {
  const response = await fetch(`${BASE_URL}/gaming-news`);
  return response.json();
};

export const getPopularGames = async () => {
  const response = await fetch(`${BASE_URL}/popular-games`);
  return response.json();
};

export const getPokemon = async (name) => {
  const response = await fetch(`${BASE_URL}/pokemon/${name}`);
  return response.json();
};