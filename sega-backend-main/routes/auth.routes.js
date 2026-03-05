const express = require('express');
const { body } = require('express-validator');
const controller = require('../controllers/auth.controller');
const validate = require('../middlewares/validateMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const passport = require('passport');
const jwt = require('jsonwebtoken');

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

// ===== Cambiar rol (solo admins) =====
router.post(
  '/update-role',
  authMiddleware,
  [
    body('username').trim().notEmpty().withMessage('El nombre de usuario es requerido'),
    body('newRole').trim().notEmpty().withMessage('El nuevo rol es requerido')
  ],
  validate,
  controller.updateUserRole
);

// ===== OAuth Google =====
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: (process.env.FRONTEND_URL || 'http://localhost:5173') + '/login', session: false }),
  (req, res) => {
    const token = jwt.sign({ id: req.user._id, role: req.user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    const redirectUrl = `${process.env.FRONTEND_URL || 'http://localhost:5173'}/oauth/callback?token=${token}`;
    res.redirect(redirectUrl);
  }
);

// ===== OAuth Microsoft =====
router.get('/microsoft', passport.authenticate('microsoft'));

router.get(
  '/microsoft/callback',
  passport.authenticate('microsoft', { failureRedirect: (process.env.FRONTEND_URL || 'http://localhost:5173') + '/login', session: false }),
  (req, res) => {
    const token = jwt.sign({ id: req.user._id, role: req.user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    const redirectUrl = `${process.env.FRONTEND_URL || 'http://localhost:5173'}/oauth/callback?token=${token}`;
    res.redirect(redirectUrl);
  }
);

router.get('/me', require('../middlewares/authMiddleware'), (req, res) => {
  res.json({ username: req.user.username, role: req.user.role });
});

module.exports = router;
