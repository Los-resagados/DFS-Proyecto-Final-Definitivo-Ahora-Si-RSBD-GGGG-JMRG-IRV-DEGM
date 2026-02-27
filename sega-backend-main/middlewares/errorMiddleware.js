const errorMiddleware = (err, req, res, next) => {
  console.error('Error:', err.message);

  const statusCode = res.statusCode && res.statusCode !== 200 ? res.statusCode : 500;

  const payload = {
    success: false,
    message: err.message || 'Error interno del servidor',
  };

  if (process.env.NODE_ENV !== 'production') {
    payload.stack = err.stack;
  }

  res.status(statusCode).json(payload);
};

module.exports = errorMiddleware;
