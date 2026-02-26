const formatearFecha = (fechaISO) => {
    const fecha = new Date(fechaISO);

    const dia = String(fecha.getUTCDate()).padStart(2, "0");
    const mes = String(fecha.getUTCMonth() + 1).padStart(2, "0");
    const anio = fecha.getUTCFullYear();

    return `${dia}/${mes}/${anio}`;
};

const fs = require("fs").promises;
const path = require("path");

const filePath = path.join(__dirname, "..", "tareas.json");

// Obtener todas
exports.getTareas = async (req, res, next) => {
    try {
        const data = await fs.readFile(filePath, "utf-8");
        let tareas = JSON.parse(data);

        // si no es admin solo ve sus tareas
        if (req.user.role !== "admin") {
            tareas = tareas.filter(t => t.asignadaA === req.user.username);
        }

        // formatear fechas
        tareas = tareas.map(t => ({
            ...t,
            fechaPublicacion: formatearFecha(t.fechaPublicacion),
            fechaLimite: formatearFecha(t.fechaLimite)
        }));

        res.json(tareas);

    } catch (err) {
        next(err);
    }
};


// Crear tarea
// Crear tarea con fechas ISO y roles
exports.createTarea = async (req, res, next) => {
  try {
    const { titulo, descripcion, asignadaA, fechaLimite } = req.body;

    // Validar campos
    if (!titulo || !descripcion || !asignadaA || !fechaLimite)
      return res.status(400).json({ msg: "Faltan datos" });

    // Validar que fechaLimite sea una fecha ISO válida
    const limite = new Date(fechaLimite);
    if (isNaN(limite.getTime()))
      return res.status(400).json({ msg: "Fecha límite inválida" });

    // Solo admin puede asignar tareas
    if (req.user.role !== "admin")
      return res.status(403).json({ msg: "Solo admin puede asignar tareas" });

    // Leer tareas actuales
    const data = await fs.readFile(filePath, "utf-8");
    const tareas = JSON.parse(data);

    // Crear tarea
    const nueva = {
      id: Date.now().toString(),
      titulo,
      descripcion,
      asignadaPor: req.user.username,
      asignadaA,
      fechaPublicacion: new Date().toISOString(),
      fechaLimite: limite.toISOString()
    };

    tareas.push(nueva);

    await fs.writeFile(filePath, JSON.stringify(tareas, null, 2));
    // responder con fechas formateadas (pero guardadas en ISO)
    res.status(201).json({
      ...nueva,
      fechaPublicacion: formatearFecha(nueva.fechaPublicacion),
      fechaLimite: formatearFecha(nueva.fechaLimite)
    });


  } catch (err) {
    next(err);
  }
};

// Actualizar
exports.updateTarea = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { titulo, descripcion } = req.body;

        const data = await fs.readFile(filePath, "utf-8");
        const tareas = JSON.parse(data);

        const index = tareas.findIndex(t => t.id === id);
        if (index === -1) return res.status(404).json({ msg: "No encontrada" });

        const esAdmin = req.user.role === "admin";
        const esAsignadaAlUsuario = tareas[index].asignadaA === req.user.username;
        if (!esAdmin && !esAsignadaAlUsuario) {
            return res.status(403).json({ msg: "No autorizado para actualizar esta tarea" });
        }

        tareas[index] = { ...tareas[index], titulo, descripcion };

        await fs.writeFile(filePath, JSON.stringify(tareas, null, 2));
        res.json({
          ...tareas[index],
          fechaPublicacion: formatearFecha(tareas[index].fechaPublicacion),
          fechaLimite: formatearFecha(tareas[index].fechaLimite)
        });


    } catch (err) {
        next(err);
    }
};

// Eliminar
exports.deleteTarea = async (req, res, next) => {
    try {
        const { id } = req.params;

        const data = await fs.readFile(filePath, "utf-8");
        let tareas = JSON.parse(data);

        const nuevaLista = tareas.filter(t => t.id !== id);
        if (tareas.length === nuevaLista.length)
            return res.status(404).json({ msg: "No encontrada" });

        await fs.writeFile(filePath, JSON.stringify(nuevaLista, null, 2));
        res.json({ msg: "Eliminada" });

    } catch (err) {
        next(err);
    }
};
