const router = require('express').Router();
const { body, param } = require('express-validator');
const controller = require('../controllers/games.controller');

const authMiddleware = require('../middlewares/authMiddleware');
const allowedRoles = require('../middlewares/roleMiddleware');
const validate = require('../middlewares/validateMiddleware');

// público
router.get('/', controller.getGames);

// solo admin (Dr. Eggman)
router.post('/',
	authMiddleware,
	allowedRoles('admin'),
	[
		body('title').trim().notEmpty().withMessage('El título es requerido'),
		body('genre').trim().notEmpty().withMessage('El género es requerido'),
		body('year').isInt({ min: 1950, max: 2100 }).withMessage('Año inválido'),
		body('image').trim().notEmpty().withMessage('La imagen es requerida')
	],
	validate,
	controller.createGame
);

router.put('/:id',
	authMiddleware,
	allowedRoles('admin'),
	[
		param('id').isMongoId().withMessage('ID inválido'),
		body('title').optional().trim().notEmpty().withMessage('El título no puede estar vacío'),
		body('genre').optional().trim().notEmpty().withMessage('El género no puede estar vacío'),
		body('year').optional().isInt({ min: 1950, max: 2100 }).withMessage('Año inválido'),
		body('image').optional().trim().notEmpty().withMessage('La imagen no puede estar vacía')
	],
	validate,
	controller.updateGame
);

router.delete('/:id', authMiddleware, allowedRoles('admin'), [param('id').isMongoId().withMessage('ID inválido')], validate, controller.deleteGame);

// obtener un juego por ID (requiere autenticación)
router.get('/:id', authMiddleware, controller.getGameById);

module.exports = router;
