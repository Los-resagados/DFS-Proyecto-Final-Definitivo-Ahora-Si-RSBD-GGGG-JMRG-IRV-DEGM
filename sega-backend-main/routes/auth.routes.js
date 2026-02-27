const express = require('express');
const { body } = require('express-validator');
const controller = require('../controllers/auth.controller');
const validate = require('../middlewares/validateMiddleware');

const router = express.Router();

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

module.exports = router;
