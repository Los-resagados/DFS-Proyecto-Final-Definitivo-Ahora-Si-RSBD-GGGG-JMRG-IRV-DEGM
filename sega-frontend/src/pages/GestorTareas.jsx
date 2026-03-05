import "../styles/gestores.css";
import { useEffect, useState } from "react";
import {
  getTareas,
  createTarea,
  updateTarea,
  deleteTarea,
} from "../services/taskService";

function GestorTareas() {
  const [tareas, setTareas] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [filtroTitulo, setFiltroTitulo] = useState("");

  // Formulario para crear tarea
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [asignadaA, setAsignadaA] = useState("");
  const [fechaLimite, setFechaLimite] = useState("");

  // Edición
  const [editandoId, setEditandoId] = useState(null);
  const [editTitulo, setEditTitulo] = useState("");
  const [editDescripcion, setEditDescripcion] = useState("");

  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");

  const role = localStorage.getItem("role");
  const username = localStorage.getItem("username");

  useEffect(() => {
    loadTareas();
  }, [page, filtroTitulo]);

  const loadTareas = async () => {
    try {
      const data = await getTareas(page, 5, filtroTitulo);
      if (data.success) {
        setTareas(data.results);
        setTotalPages(data.totalPages);
        setTotal(data.total);
      }
    } catch (err) {
      setError("Error al cargar tareas");
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    setMensaje("");
    setError("");

    if (!titulo || !descripcion || !asignadaA || !fechaLimite) {
      setError("Todos los campos son requeridos");
      return;
    }

    try {
      const result = await createTarea({
        titulo,
        descripcion,
        asignadaA,
        fechaLimite,
      });

      if (result.msg) {
        setError(result.msg);
      } else {
        setMensaje("Tarea creada exitosamente");
        setTitulo("");
        setDescripcion("");
        setAsignadaA("");
        setFechaLimite("");
        loadTareas();
      }
    } catch (err) {
      setError("Error al crear tarea");
    }
  };

  const handleUpdate = async (id) => {
    try {
      await updateTarea(id, {
        titulo: editTitulo,
        descripcion: editDescripcion,
      });
      setEditandoId(null);
      setMensaje("Tarea actualizada");
      loadTareas();
    } catch (err) {
      setError("Error al actualizar tarea");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("¿Eliminar esta tarea?")) return;

    try {
      await deleteTarea(id);
      setMensaje("Tarea eliminada");
      loadTareas();
    } catch (err) {
      setError("Error al eliminar tarea");
    }
  };

  const iniciarEdicion = (tarea) => {
    setEditandoId(tarea.id);
    setEditTitulo(tarea.titulo);
    setEditDescripcion(tarea.descripcion);
  };

  const cancelarEdicion = () => {
    setEditandoId(null);
    setEditTitulo("");
    setEditDescripcion("");
  };

  return (
    <div className="gestor-container">
      <h2>Gestor de Tareas</h2>

      {mensaje && <div className="mensaje-exito">{mensaje}</div>}
      {error && <div className="mensaje-error">{error}</div>}

      {/* Formulario crear tarea - solo admin */}
      {role === "admin" && (
        <div className="formulario-tarea">
          <h3>Crear Nueva Tarea</h3>
          <form onSubmit={handleCreate}>
            <input
              type="text"
              placeholder="Título"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              required
            />
            <textarea
              placeholder="Descripción"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Asignar a (username)"
              value={asignadaA}
              onChange={(e) => setAsignadaA(e.target.value)}
              required
            />
            <input
              type="date"
              value={fechaLimite}
              onChange={(e) => setFechaLimite(e.target.value)}
              required
            />
            <button type="submit">Crear Tarea</button>
          </form>
        </div>
      )}

      {/* Filtro por título */}
      <div className="filtro">
        <input
          type="text"
          placeholder="Buscar por título..."
          value={filtroTitulo}
          onChange={(e) => {
            setFiltroTitulo(e.target.value);
            setPage(1);
          }}
        />
      </div>

      <p>Total de tareas: {total}</p>

      {/* Lista de tareas */}
      <div className="lista-tareas">
        {tareas.length === 0 ? (
          <p>No hay tareas disponibles</p>
        ) : (
          tareas.map((tarea) => (
            <div key={tarea.id} className="tarea-item">
              {editandoId === tarea.id ? (
                <div className="tarea-edicion">
                  <input
                    type="text"
                    value={editTitulo}
                    onChange={(e) => setEditTitulo(e.target.value)}
                  />
                  <textarea
                    value={editDescripcion}
                    onChange={(e) => setEditDescripcion(e.target.value)}
                  />
                  <button onClick={() => handleUpdate(tarea.id)}>
                    Guardar
                  </button>
                  <button onClick={cancelarEdicion}>Cancelar</button>
                </div>
              ) : (
                <>
                  <h3>{tarea.titulo}</h3>
                  <p>{tarea.descripcion}</p>
                  <div className="tarea-info">
                    <p>
                      <strong>Asignada a:</strong> {tarea.asignadaA}
                    </p>
                    {tarea.asignadaPor && (
                      <p>
                        <strong>Asignada por:</strong> {tarea.asignadaPor}
                      </p>
                    )}
                    <p>
                      <strong>Fecha publicación:</strong>{" "}
                      {tarea.fechaPublicacion}
                    </p>
                    <p>
                      <strong>Fecha límite:</strong> {tarea.fechaLimite}
                    </p>
                  </div>

                  <div className="tarea-acciones">
                    {/* Admin puede editar/eliminar cualquier tarea */}
                    {/* Usuario puede editar solo sus tareas */}
                    {(role === "admin" ||
                      tarea.asignadaA === username) && (
                      <button onClick={() => iniciarEdicion(tarea)}>
                        Editar
                      </button>
                    )}

                    {role === "admin" && (
                      <button onClick={() => handleDelete(tarea.id)}>
                        Eliminar
                      </button>
                    )}
                  </div>
                </>
              )}
            </div>
          ))
        )}
      </div>

      {/* Paginación */}
      {totalPages > 1 && (
        <div className="paginacion">
          <button onClick={() => setPage(page - 1)} disabled={page === 1}>
            Anterior
          </button>
          <span>
            Página {page} de {totalPages}
          </span>
          <button
            onClick={() => setPage(page + 1)}
            disabled={page === totalPages}
          >
            Siguiente
          </button>
        </div>
      )}
    </div>
  );
}

export default GestorTareas;