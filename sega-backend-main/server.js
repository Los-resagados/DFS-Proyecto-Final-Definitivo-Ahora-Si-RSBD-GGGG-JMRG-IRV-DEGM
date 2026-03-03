require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const passport = require('passport');
const session = require('express-session');

const app = express();

// ===============================
// ✅ Verificar variables críticas ANTES de iniciar
// ===============================
if (!process.env.MONGO_URI) {
  console.error("❌ Falta MONGO_URI en el .env");
  process.exit(1);
}

if (!process.env.JWT_SECRET) {
  console.error("❌ Falta JWT_SECRET en el .env");
  process.exit(1);
}

// ===============================
// ✅ Middlewares básicos
// ===============================
app.use(cors({ origin: process.env.FRONTEND_URL || 'http://localhost:5173', credentials: true }));
app.use(express.json());
app.use("/images", express.static("public/images"));

// Session + Passport
app.use(session({ secret: process.env.SESSION_SECRET || 'keyboardcat', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

// ===============================
// ✅ Ruta raíz
// ===============================
app.get("/", (req, res) => {
  res.json({ success: true, message: "API Sega backend corriendo 🚀" });
});

// Health check
app.get("/api/health", (req, res) => {
  res.json({ success: true, status: "ok" });
});

// ===============================
// ✅ Conexión a MongoDB
// ===============================
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB conectado"))
  .catch((err) => {
    console.error("❌ Error MongoDB:", err);
    process.exit(1);
  });

// ===============================
// ✅ RUTAS PRINCIPALES
// ===============================
app.use("/api/games", require("./routes/games.routes"));
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/tareas", require("./routes/tareas.routes"));

// 🔥 API EXTERNA (Noticias + RAWG + Pokémon)
app.use("/api/external", require("./routes/external.routes"));

// ===============================
// ✅ Middleware de errores
// ===============================
const errorMiddleware = require("./middlewares/errorMiddleware");
app.use(errorMiddleware);

// ===============================
// ✅ Servidor
// ===============================
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});