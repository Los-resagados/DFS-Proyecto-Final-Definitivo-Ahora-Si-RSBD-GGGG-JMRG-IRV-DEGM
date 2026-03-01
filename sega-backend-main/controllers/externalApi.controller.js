const axios = require("axios");

const GNEWS_API_KEY = "e8e5e6ab8052a6aecb8b2e93fd737935"; 
const RAWG_API_KEY = process.env.RAWG_API_KEY;

// ===============================
// 📰 GNEWS
// ===============================
exports.getGamingNews = async () => {
  try {
    const response = await axios.get(
      `https://gnews.io/api/v4/search?q=videojuegos OR sega&lang=es&max=5&token=${GNEWS_API_KEY}`
    );

    return response.data.articles;
  } catch (error) {
    throw new Error("Error al obtener noticias de videojuegos");
  }
};


// ===============================
// 🎮 RAWG - Juegos Populares
// ===============================
exports.getPopularGames = async () => {
  try {
    const response = await axios.get(
      `https://api.rawg.io/api/games?key=${RAWG_API_KEY}&page_size=5`
    );

    return response.data.results;
  } catch (error) {
    throw new Error("Error al obtener juegos populares");
  }
};


// ===============================
// 🟣 Pokémon API
// ===============================
exports.getPokemon = async (name) => {
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );

    return response.data;
  } catch (error) {
    throw new Error("Pokémon no encontrado");
  }
};