const BASE_URL = import.meta.env.VITE_API_URL + "/api/external";

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