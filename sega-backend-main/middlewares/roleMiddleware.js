// Middleware genérico para validar roles permitidos
module.exports = function allowedRoles(...roles) {
  return (req, res, next) => {
    if (!req.user) {
      res.status(401);
      return next(new Error('No autenticado'));
    }

    if (!roles.includes(req.user.role)) {
      res.status(403);
      return next(new Error('Acceso denegado'));
    }

    return next();
  };
};
