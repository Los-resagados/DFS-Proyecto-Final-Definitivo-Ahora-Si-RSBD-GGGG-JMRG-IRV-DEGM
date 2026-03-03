const usuarioMiddleware = (req, res, next) => {
  if (req.user && (req.user.role === 'usuario' || req.user.role === 'editor' || req.user.role === 'admin')) {
    return next();
  }

  res.status(403);
  return next(new Error('Acceso denegado'));
};

module.exports = usuarioMiddleware;
