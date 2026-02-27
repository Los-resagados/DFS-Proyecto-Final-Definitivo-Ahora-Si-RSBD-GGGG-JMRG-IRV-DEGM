const Game = require('../models/Game')

// GET
exports.getGames = async (req, res) => {
  const games = await Game.find()
  res.json(games)
}

// POST
exports.createGame = async (req, res) => {
  const game = new Game(req.body)
  await game.save()
  res.json(game)
}

// PUT
exports.updateGame = async (req, res) => {
  const game = await Game.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  )
  res.json(game)
}

// DELETE
exports.deleteGame = async (req, res) => {
  await Game.findByIdAndDelete(req.params.id)
  res.json({ msg: "Juego eliminado" })
}
// GET por ID
exports.getGameById = async (req, res) => {
  try {
    const game = await Game.findById(req.params.id);
    if (!game) return res.status(404).json({ message: "Juego no encontrado" });
    res.json(game);
  } catch (err) {
    res.status(500).json({ message: "Error al obtener el juego", error: err.message });
  }
};
