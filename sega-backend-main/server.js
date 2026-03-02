require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const MicrosoftStrategy = require("passport-microsoft").Strategy;
const session = require("express-session");

const app = express();

// ===============================
// ✅ Verificar variables críticas
// ===============================
if (!process.env.MONGO_URI) {
  console.error("❌ Falta MONGO_URI en el .env");
  process.exit(1);
}

if (!process.env.JWT_SECRET) {
  console.error("❌ Falta JWT_SECRET en el .env");
  process.exit(1);
}

if (!process.env.GOOGLE_CLIENT_ID) {
  console.error("❌ Falta GOOGLE_CLIENT_ID en el .env");
  process.exit(1);
}

if (!process.env.GOOGLE_CLIENT_SECRET) {
  console.error("❌ Falta GOOGLE_CLIENT_SECRET en el .env");
  process.exit(1);
}

if (!process.env.MICROSOFT_CLIENT_ID) {
  console.error("❌ Falta MICROSOFT_CLIENT_ID en el .env");
  process.exit(1);
}

if (!process.env.MICROSOFT_CLIENT_SECRET) {
  console.error("❌ Falta MICROSOFT_CLIENT_SECRET en el .env");
  process.exit(1);
}

// ===============================
// ✅ Middlewares básicos
// ===============================
app.use(cors({
  origin: "http://localhost:5173", // tu frontend
  credentials: true
}));

app.use(express.json());
app.use("/images", express.static("public/images"));

// ===============================
// ✅ SESSION
// ===============================
app.use(
  session({
    secret: "segaSecret",
    resave: false,
    saveUninitialized: false,
  })
);

// ===============================
// ✅ PASSPORT
// ===============================
app.use(passport.initialize());
app.use(passport.session());

// ===============================
// ✅ CONFIGURACIÓN GOOGLE
// ===============================
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const User = require("./models/User");

        let user = await User.findOne({ googleId: profile.id });

        if (!user) {
          user = await User.create({
            username: profile.displayName,
            googleId: profile.id,
            email: profile.emails[0].value,
          });
        }

        return done(null, user);
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

// ===============================
// ✅ CONFIGURACIÓN MICROSOFT
// ===============================
passport.use(
  new MicrosoftStrategy(
    {
      clientID: process.env.MICROSOFT_CLIENT_ID,
      clientSecret: process.env.MICROSOFT_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/microsoft/callback",
      scope: ["user.read"],
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const User = require("./models/User");

        let user = await User.findOne({ microsoftId: profile.id });

        if (!user) {
          user = await User.create({
            username: profile.displayName,
            microsoftId: profile.id,
            email: profile.emails[0].value,
          });
        }

        return done(null, user);
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

// ===============================
// ✅ SERIALIZE / DESERIALIZE
// ===============================
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const User = require("./models/User");
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

// ===============================
// ✅ Ruta raíz
// ===============================
app.get("/", (req, res) => {
  res.json({ success: true, message: "API Sega backend corriendo 🚀" });
});

app.get("/api/health", (req, res) => {
  res.json({ success: true, status: "ok" });
});

// ===============================
// ✅ RUTAS GOOGLE AUTH
// ===============================
app.get("/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get("/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("http://localhost:5173"); // tu frontend
  }
);

// ===============================
// ✅ RUTAS MICROSOFT AUTH
// ===============================
app.get("/auth/microsoft",
  passport.authenticate("microsoft", { scope: ["user.read"] })
);

app.get("/auth/microsoft/callback",
  passport.authenticate("microsoft", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("http://localhost:5173");
  }
);

// ===============================
// ✅ Conexión MongoDB
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