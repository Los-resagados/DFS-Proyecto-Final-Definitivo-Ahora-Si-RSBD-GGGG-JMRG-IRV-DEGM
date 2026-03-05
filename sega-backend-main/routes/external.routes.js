const express = require("express");
const router = express.Router();

const { 
  getGamingNews,
  getPopularGames,
  getPokemon
} = require("../controllers/externalApi.controller");


// 📰 Noticias gaming
router.get("/gaming-news", async (req, res) => {
  try {
    const news = await getGamingNews();
    res.json(news);
  } catch (error) {
    console.error("❌ Error en /gaming-news:", error.message);
    res.status(500).json({ 
      message: error.message,
      error: "No se pudo obtener las noticias. Verifica la conexión o intenta más tarde."
    });
  }
});


// 🎮 Juegos populares RAWG
router.get("/popular-games", async (req, res) => {
  try {
    const games = await getPopularGames();
    if (!games || games.length === 0) {
      return res.status(404).json({ 
        message: "No fue posible obtener juegos",
        error: "Verifica que RAWG_API_KEY esté configurado correctamente"
      });
    }
    res.json(games);
  } catch (error) {
    console.error("❌ Error en /popular-games:", error.message);
    res.status(500).json({ 
      message: error.message,
      error: "No se pudo obtener los juegos populares. Verifica tu API key de RAWG."
    });
  }
});


// 🟣 Pokémon
router.get("/pokemon/:name", async (req, res) => {
  try {
    const pokemon = await getPokemon(req.params.name);
    res.json(pokemon);
  } catch (error) {
    console.error("❌ Error en /pokemon:", error.message);
    res.status(404).json({ 
      message: error.message,
      error: "Pokémon no encontrado. Verifica el nombre e intenta de nuevo."
    });
  }
});

module.exports = router;