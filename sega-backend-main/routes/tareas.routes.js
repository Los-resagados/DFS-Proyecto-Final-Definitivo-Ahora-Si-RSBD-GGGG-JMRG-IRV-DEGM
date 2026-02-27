const express = require("express");
const { body, param } = require('express-validator');
const router = express.Router();
const tareas = require("../controllers/tareas.controller");
const authMiddleware = require("../middlewares/authMiddleware");
const allowedRoles = require('../middlewares/roleMiddleware');
const validate = require('../middlewares/validateMiddleware');

// Rutas de tareas
// GET: todos para admin, solo asignadas para usuario normal
router.get("/", authMiddleware, tareas.getTareas);

// POST: crear tarea, solo admin puede asignar
router.post(
	"/",
	authMiddleware,
	allowedRoles('admin'),
	[
		body('titulo').trim().notEmpty().withMessage('Titulo requerido'),
		body('descripcion').trim().notEmpty().withMessage('Descripcion requerida'),
		body('asignadaA').trim().notEmpty().withMessage('AsignadaA requerida'),
		body('fechaLimite').isISO8601().withMessage('Fecha límite inválida')
	],
	validate,
	tareas.createTarea
);

// PUT: actualizar tarea (podrías dejar solo admin o permitir que usuario actualice su tarea)
router.put(
	"/:id",
	authMiddleware,
	[
		param('id').notEmpty().withMessage('ID tarea requerido'),
		body('titulo').optional().trim().notEmpty().withMessage('Titulo no puede ser vacío'),
		body('descripcion').optional().trim().notEmpty().withMessage('Descripcion no puede ser vacía')
	],
	validate,
	tareas.updateTarea
);

// DELETE: eliminar tarea (opcional: solo admin)
router.delete(
	"/:id",
	authMiddleware,
	allowedRoles('admin'),
	[param('id').notEmpty().withMessage('ID tarea requerido')],
	validate,
	tareas.deleteTarea
);

module.exports = router;
