// Script para verificar que el servidor arranca correctamente
require('dotenv').config();

console.log('✅ Verificando configuración...\n');

// Verificar variables de entorno
console.log('📋 Variables de entorno:');
console.log(`   JWT_SECRET: ${process.env.JWT_SECRET ? '✅ Configurado' : '❌ Falta'}`);
console.log(`   MONGO_URI: ${process.env.MONGO_URI ? '✅ Configurado' : '❌ Falta'}`);
console.log(`   PORT: ${process.env.PORT || 3000}`);
console.log(`   NODE_ENV: ${process.env.NODE_ENV || 'development'}\n`);

// Verificar archivos críticos
const fs = require('fs');
const path = require('path');

console.log('📁 Verificando archivos críticos:');
const files = [
  'models/User.js',
  'controllers/auth.controller.js',
  'middlewares/authMiddleware.js',
  'middlewares/adminMiddleware.js',
  'middlewares/errorMiddleware.js',
  'middlewares/validateMiddleware.js',
  'routes/auth.routes.js',
  'routes/games.routes.js',
  'routes/tareas.routes.js',
  'server.js'
];

files.forEach(file => {
  const exists = fs.existsSync(path.join(__dirname, file));
  console.log(`   ${file}: ${exists ? '✅' : '❌'}`);
});

console.log('\n🚀 Intentando iniciar servidor...\n');
require('./server.js');
