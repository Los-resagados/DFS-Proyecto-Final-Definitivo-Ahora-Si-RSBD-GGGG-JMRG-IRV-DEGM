const express = require('express');
const { body } = require('express-validator');
const passport = require('passport'); // Importamos passport
const jwt = require('jsonwebtoken');
const controller = require('../controllers/auth.controller');
const validate = require('../middlewares/validateMiddleware');

const router = express.Router();

/** * RUTAS DE AUTENTICACIÓN LOCAL
 */
router.post(
  '/login',
  [
    body('username').trim().notEmpty().withMessage('El nombre de usuario es requerido'),
    body('password').notEmpty().withMessage('La contraseña es requerida')
  ],
  validate,
  controller.login
);

router.post(
  '/register',
  [
    body('username').trim().notEmpty().withMessage('El nombre de usuario es requerido'),
    body('password')
      .isLength({ min: 6 })
      .withMessage('La contraseña debe tener al menos 6 caracteres')
  ],
  validate,
  controller.register
);



/** * RUTAS DE GOOGLE OAUTH
 */
router.get("/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get("/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    // Generar JWT con el usuario autenticado
    const token = jwt.sign(
      { id: req.user._id, username: req.user.username, role: req.user.role },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    // Redirigir al frontend con el token
    res.redirect(`http://localhost:5173/dashboard?token=${token}&role=${req.user.role}`);
  }
);


/** * RUTAS DE MICROSOFT OAUTH
 */
router.get("/microsoft",
  passport.authenticate("microsoft", { scope: ["user.read"] })
);

router.get("/microsoft/callback",
  passport.authenticate("microsoft", { failureRedirect: "/login" }),
  (req, res) => {
    // Generar JWT con el usuario autenticado
    const token = jwt.sign(
      { id: req.user._id, username: req.user.username, role: req.user.role },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    // Redirigir al frontend con el token
    res.redirect(`http://localhost:5173/dashboard?token=${token}&role=${req.user.role}`);
  }
);

module.exports = router;