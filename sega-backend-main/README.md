# sega-backend — Notas rápidas

Cambios y comandos útiles:

- Rutas añadidas:
  - `POST /api/auth/register` — registro (valida username y password; role por defecto `user`).
  - `POST /api/auth/login` — login (valida campos).

- Protecciones:
  - `GET /api/games/:id` ahora requiere autenticación.
  - Endpoints de creación/edición/borrado de juegos siguen requeridos `admin`.

- Variables de entorno necesarias:
  - `MONGO_URI` — conexión MongoDB
  - `JWT_SECRET` — secreto para JWT (obligatorio, el servidor no arranca sin él)

- Scripts:
```powershell
npm install
npm run dev   # arranca con nodemon
npm start     # arranca con node
```

- Para pruebas básicas futuras: agregar jest/mocha y mocks de mongoose.

Si quieres, añado endpoint para crear administradores (protegido) o tests automáticos ahora.
