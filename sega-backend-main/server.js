require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const passport = require('passport');
const session = require('express-session');

const app = express();

// ===============================
// ✅ CORS (modo prueba abierto)
// ===============================
app.use(cors());

// ===============================
// ✅ Middlewares básicos
// ===============================
app.use(express.json());
app.use("/images", express.static("public/images"));

// Session + Passport
app.use(session({
  secret: process.env.SESSION_SECRET || 'keyboardcat',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

// ===============================
// ✅ Variables críticas
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
// ✅ Rutas
// ===============================
app.get("/", (req, res) => {
  res.json({ success: true, message: "API Sega backend corriendo 🚀" });
});

app.get("/api/health", (req, res) => {
  res.json({ success: true, status: "ok" });
});

app.use("/api/games", require("./routes/games.routes"));
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/tareas", require("./routes/tareas.routes"));
app.use("/api/external", require("./routes/external.routes"));
app.use("/api/users", require("./routes/users.routes"));

// ===============================
// ✅ Middleware de errores
// ===============================
const errorMiddleware = require("./middlewares/errorMiddleware");
app.use(errorMiddleware);

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
// ✅ Servidor
// ===============================
const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
});