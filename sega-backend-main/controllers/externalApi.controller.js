const axios = require("axios");

const GNEWS_API_KEY = "e8e5e6ab8052a6aecb8b2e93fd737935"; 
const RAWG_API_KEY = process.env.RAWG_API_KEY;

// ===============================
// 📰 GNEWS
// ===============================
exports.getGamingNews = async () => {
  try {
    if (!GNEWS_API_KEY) {
      throw new Error("GNEWS_API_KEY no configurado");
    }

    const response = await axios.get(
      `https://gnews.io/api/v4/search?q=videojuegos OR sega&lang=es&max=5&token=${GNEWS_API_KEY}`,
      { timeout: 10000 }
    );

    return response.data.articles || [];
  } catch (error) {
    console.error("❌ Error al obtener noticias:", error.message);
    throw new Error("Error al obtener noticias de videojuegos");
  }
};


// ===============================
// 🎮 RAWG - Juegos Populares
// ===============================
exports.getPopularGames = async () => {
  try {
    if (!RAWG_API_KEY) {
      throw new Error("RAWG_API_KEY no configurado en variables de entorno");
    }

    const response = await axios.get(
      `https://api.rawg.io/api/games?key=${RAWG_API_KEY}&page_size=6`,
      { timeout: 10000 }
    );

    return response.data.results || [];
  } catch (error) {
    console.error("❌ Error al obtener juegos RAWG:", error.message);
    throw new Error("Error al obtener juegos populares: " + error.message);
  }
};


// ===============================
// 🟣 Pokémon API
// ===============================
exports.getPokemon = async (name) => {
  try {
    if (!name || name.trim() === "") {
      throw new Error("Nombre de Pokémon vacío");
    }

    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase().trim()}`,
      { timeout: 10000 }
    );

    return response.data;
  } catch (error) {
    console.error("❌ Error al obtener Pokémon:", error.message);
    throw new Error("Pokémon no encontrado: " + name);
  }
};