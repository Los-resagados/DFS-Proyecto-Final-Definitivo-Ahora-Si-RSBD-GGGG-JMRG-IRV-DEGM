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
    res.status(500).json({ message: error.message });
  }
});


// 🎮 Juegos populares RAWG
router.get("/popular-games", async (req, res) => {
  try {
    const games = await getPopularGames();
    res.json(games);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// 🟣 Pokémon
router.get("/pokemon/:name", async (req, res) => {
  try {
    const pokemon = await getPokemon(req.params.name);
    res.json(pokemon);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;