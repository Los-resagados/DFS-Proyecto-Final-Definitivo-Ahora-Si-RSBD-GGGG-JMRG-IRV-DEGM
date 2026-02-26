const adminMiddleware = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    return next();
  }

  res.status(403);
  return next(new Error('Acceso solo para administradores'));
};

module.exports = adminMiddleware;
