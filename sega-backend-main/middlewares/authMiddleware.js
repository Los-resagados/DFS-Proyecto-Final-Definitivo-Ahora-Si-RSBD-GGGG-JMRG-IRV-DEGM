const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401);
    return next(new Error('No hay token'));
  }

  const token = authHeader.split(' ')[1];

  if (!process.env.JWT_SECRET) {
    res.status(500);
    return next(new Error('JWT secret no configurado en el servidor'));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select('-password');

    if (!user) {
      res.status(401);
      return next(new Error('Usuario no autorizado'));
    }

    req.user = user;
    return next();
  } catch (error) {
    res.status(401);
    if (error.name === 'TokenExpiredError') {
      return next(new Error('Token expirado'));
    }
    return next(new Error('Token inválido'));
  }
};

module.exports = authMiddleware;
