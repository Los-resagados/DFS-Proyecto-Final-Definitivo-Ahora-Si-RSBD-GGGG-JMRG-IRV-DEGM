const Game = require('../models/Game')

// ===============================
// GET ALL con PAGINACIÓN + FILTROS
// ===============================
exports.getGames = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1
    const limit = parseInt(req.query.limit) || 5
    const skip = (page - 1) * limit

    let filter = {}

    if (req.query.title) {
      filter.title = { $regex: req.query.title, $options: "i" }
    }
    if (req.query.genre) {
      filter.genre = req.query.genre
    }

    if (req.query.category) {
      filter.category = req.query.category
    }

    const total = await Game.countDocuments(filter)

    const games = await Game.find(filter)
      .skip(skip)
      .limit(limit)

    res.status(200).json({
      success: true,
      total,
      page,
      totalPages: Math.ceil(total / limit),
      results: games
    })

  } catch (err) {
    next(err)
  }
}

// ===============================
// GET por ID
// ===============================
exports.getGameById = async (req, res, next) => {
  try {
    const game = await Game.findById(req.params.id)

    if (!game)
      return res.status(404).json({
        success: false,
        message: "Juego no encontrado"
      })

    res.status(200).json({
      success: true,
      data: game
    })

  } catch (err) {
    next(err)
  }
}

// ===============================
// POST
// ===============================
exports.createGame = async (req, res, next) => {
  try {
    const game = new Game(req.body)
    await game.save()

    res.status(201).json({
      success: true,
      message: "Juego creado correctamente",
      data: game
    })

  } catch (err) {
    next(err)
  }
}

// ===============================
// PUT
// ===============================
exports.updateGame = async (req, res, next) => {
  try {
    const game = await Game.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )

    if (!game)
      return res.status(404).json({
        success: false,
        message: "Juego no encontrado"
      })

    res.status(200).json({
      success: true,
      message: "Juego actualizado correctamente",
      data: game
    })

  } catch (err) {
    next(err)
  }
}

// ===============================
// DELETE
// ===============================
exports.deleteGame = async (req, res, next) => {
  try {
    const game = await Game.findByIdAndDelete(req.params.id)

    if (!game)
      return res.status(404).json({
        success: false,
        message: "Juego no encontrado"
      })

    res.status(200).json({
      success: true,
      message: "Juego eliminado correctamente"
    })

  } catch (err) {
    next(err)
  }
}