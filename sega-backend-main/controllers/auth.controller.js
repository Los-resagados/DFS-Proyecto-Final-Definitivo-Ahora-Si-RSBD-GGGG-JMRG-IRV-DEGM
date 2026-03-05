const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
      res.status(401);
      return next(new Error('Usuario no encontrado'));
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(401);
      return next(new Error('Contraseña incorrecta'));
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({ success: true, username: user.username, role: user.role, token });
  } catch (error) {
    next(error);
  }
};

const register = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const existing = await User.findOne({ username });
    if (existing) {
      res.status(409);
      return next(new Error('Nombre de usuario ya existe'));
    }

    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    // SIEMPRE crear como "usuario", nunca otro rol
    const user = new User({ username, password: hashed, role: 'usuario' });
    await user.save();

    const token = jwt.sign({ id: user._id, role: 'usuario' }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(201).json({ success: true, username: user.username, role: 'usuario', token });
  } catch (error) {
    next(error);
  }
};

const updateUserRole = async (req, res, next) => {
  try {
    // Solo admins pueden cambiar roles
    if (req.user.role !== 'admin') {
      res.status(403);
      return next(new Error('Solo los administradores pueden cambiar roles'));
    }

    const { username, newRole } = req.body;

    // Validar que newRole es válido
    if (!['admin', 'usuario', 'editor'].includes(newRole)) {
      res.status(400);
      return next(new Error('Rol inválido. Debe ser: admin, usuario o editor'));
    }

    // Obtener usuario a modificar
    const targetUser = await User.findOne({ username });
    if (!targetUser) {
      res.status(404);
      return next(new Error('Usuario no encontrado'));
    }

    // Proteger admins: no se puede cambiar el rol de un admin
    if (targetUser.role === 'admin') {
      res.status(403);
      return next(new Error('No se puede cambiar el rol de un administrador'));
    }

    // Actualizar rol
    targetUser.role = newRole;
    await targetUser.save();

    res.json({ 
      success: true, 
      message: `Rol de ${username} actualizado a ${newRole}`,
      username: targetUser.username,
      role: targetUser.role
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { login, register, updateUserRole };