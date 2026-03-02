const express = require('express');
const { body } = require('express-validator');
const passport = require('passport'); // Importamos passport
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
    // Aquí puedes manejar la lógica tras un login exitoso
    res.redirect("/"); 
  }
);

module.exports = router;