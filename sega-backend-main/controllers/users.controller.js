const User = require('../models/User');

// ===============================
// GET ALL USERS (solo admin)
// ===============================
exports.getUsers = async (req, res, next) => {
  try {
    const { role } = req.query;
    
    let filter = {};
    if (role) {
      filter.role = role;
    }

    const users = await User.find(filter).select('-password');

    res.status(200).json({
      success: true,
      total: users.length,
      results: users
    });

  } catch (err) {
    next(err);
  }
};

// ===============================
// GET USER BY ID
// ===============================
exports.getUserById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id).select('-password');

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'Usuario no encontrado'
      });
    }

    res.status(200).json({
      success: true,
      data: user
    });

  } catch (err) {
    next(err);
  }
};

// ===============================
// UPDATE USER
// ===============================
exports.updateUser = async (req, res, next) => {
  try {
    const { role, username, email } = req.body;

    const user = await User.findByIdAndUpdate(
      req.params.id,
      { role, username, email },
      { new: true }
    ).select('-password');

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'Usuario no encontrado'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Usuario actualizado correctamente',
      data: user
    });

  } catch (err) {
    next(err);
  }
};

// ===============================
// DELETE USER
// ===============================
exports.deleteUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'Usuario no encontrado'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Usuario eliminado correctamente'
    });

  } catch (err) {
    next(err);
  }
};
