const router = require('express').Router();
const { param, body } = require('express-validator');
const controller = require('../controllers/users.controller');

const authMiddleware = require('../middlewares/authMiddleware');
const allowedRoles = require('../middlewares/roleMiddleware');
const validate = require('../middlewares/validateMiddleware');

// Obtener todos los usuarios (solo admin)
router.get('/',
  authMiddleware,
  allowedRoles('admin'),
  controller.getUsers
);

// Obtener usuario por ID (solo admin)
router.get('/:id',
  authMiddleware,
  allowedRoles('admin'),
  [param('id').isMongoId().withMessage('ID inválido')],
  validate,
  controller.getUserById
);

// Actualizar usuario (solo admin)
router.put('/:id',
  authMiddleware,
  allowedRoles('admin'),
  [
    param('id').isMongoId().withMessage('ID inválido'),
    body('role').optional().isIn(['admin', 'editor', 'usuario']).withMessage('Rol inválido'),
    body('username').optional().trim().notEmpty().withMessage('El nombre de usuario no puede estar vacío'),
    body('email').optional().isEmail().withMessage('Email inválido')
  ],
  validate,
  controller.updateUser
);

// Eliminar usuario (solo admin)
router.delete('/:id',
  authMiddleware,
  allowedRoles('admin'),
  [param('id').isMongoId().withMessage('ID inválido')],
  validate,
  controller.deleteUser
);

module.exports = router;
