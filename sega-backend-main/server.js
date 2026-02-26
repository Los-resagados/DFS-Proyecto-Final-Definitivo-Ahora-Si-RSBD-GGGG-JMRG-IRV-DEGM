require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use("/images", express.static("public/images"));

app.get('/', (req, res) => {
  res.json({ success: true, message: 'API Sega backend corriendo' });
});

app.get('/api/health', (req, res) => {
  res.json({ success: true, status: 'ok' });
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Mongo conectado"))
  .catch(err => console.log(err));

// rutas
app.use('/api/games', require('./routes/games.routes'));
app.use("/api/auth", require("./routes/auth.routes"));
app.use('/api/tareas', require('./routes/tareas.routes'));

// middleware de errores
const errorMiddleware = require("./middlewares/errorMiddleware");
app.use(errorMiddleware);

// Comprobar variables críticas
if (!process.env.JWT_SECRET) {
  console.error('Falta la variable de entorno JWT_SECRET. Define en .env');
  process.exit(1);
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});
