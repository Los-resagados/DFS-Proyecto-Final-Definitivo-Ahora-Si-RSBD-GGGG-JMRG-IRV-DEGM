console.log("SEED ARRANCÓ");
require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("./models/User");

async function seedUsers() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongo conectado para seed");

    // Borrar todos los usuarios existentes
    await User.deleteMany();

    // Definir los usuarios
    const usuarios = [
      { username: "eggman", password: "Sage2022", role: "admin" },
      { username: "neometalsonic", password: "metaloverlord", role: "admin" },
      { username: "infinite", password: "rubifantasma", role: "user" },
      { username: "sage", password: "aiassistant", role: "user" },
      { username: "metalsonic", password: "metal", role: "user" },
      { username: "Ricardo", password: "4321", role: "admin" }
    ];

    // Encriptar contraseñas
    for (let u of usuarios) {
      u.password = await bcrypt.hash(u.password, 10);
    }

    // Guardar usuarios en DB
    await User.create(usuarios);

    console.log("Usuarios creados correctamente con contraseñas encriptadas");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

seedUsers();
