const { validationResult } = require('express-validator');

const validateMiddleware = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: 'Errores de validacion',
      errors: errors.array().map(err => ({ field: err.param, message: err.msg }))
    });
  }
  next();
};

module.exports = validateMiddleware;
