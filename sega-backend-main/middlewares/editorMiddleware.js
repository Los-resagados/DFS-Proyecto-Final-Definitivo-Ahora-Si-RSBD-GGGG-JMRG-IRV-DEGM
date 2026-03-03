const editorMiddleware = (req, res, next) => {
  if (req.user && (req.user.role === 'editor' || req.user.role === 'admin')) {
    return next();
  }

  res.status(403);
  return next(new Error('Acceso solo para editores y administradores'));
};

module.exports = editorMiddleware;
