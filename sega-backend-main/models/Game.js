const mongoose = require('mongoose')

const GameSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  trailer: {
    type: String
  },
  description: {
    type: String
  },
  sinopsis: {
    type: String
  },
  images: [
    {
      type: String
    }
  ],
  comprar: [
    {
      nombre: String,
      logo: String,
      link: String
    }
  ]
});

module.exports = mongoose.model('Game', GameSchema)
