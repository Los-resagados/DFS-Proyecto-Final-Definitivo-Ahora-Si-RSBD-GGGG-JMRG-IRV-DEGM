import "../styles/paginas.css";
import { useEffect, useState } from "react";
import { getGames, createGame, deleteGame, updateGame, assignEditors } from "../services/gameService";
import { getUsers } from "../services/userService";

function EditorJuegos() {
  const [games, setGames] = useState([]);
  const [editors, setEditors] = useState([]);
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [image, setImage] = useState("");
  const [selectedGame, setSelectedGame] = useState(null);
  const [selectedEditors, setSelectedEditors] = useState([]);
  const [showAssignModal, setShowAssignModal] = useState(false);

  const role = localStorage.getItem("role");

  useEffect(() => {
    loadGames();
    loadEditors();
  }, []);

  const loadGames = async () => {
    try {
      const data = await getGames();
      setGames(data.results || data);
    } catch (error) {
      console.error("Error al cargar juegos:", error);
    }
  };

  const loadEditors = async () => {
    try {
      const data = await getUsers("editor");
      setEditors(data);
    } catch (error) {
      console.error("Error al cargar editores:", error);
      alert("No se pudieron cargar los editores. Asegúrate de tener permisos de administrador.");
    }
  };

  const handleCreate = async () => {
    if (!title || !genre || !year || !image) {
      alert("Por favor completa todos los campos");
      return;
    }

    try {
      await createGame({ title, genre, year: parseInt(year), image });
      setTitle("");
      setGenre("");
      setYear("");
      setImage("");
      loadGames();
      alert("Juego creado exitosamente");
    } catch (error) {
      console.error("Error al crear juego:", error);
      alert("Error al crear el juego");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("¿Estás seguro de eliminar este juego?")) {
      try {
        await deleteGame(id);
        loadGames();
        alert("Juego eliminado exitosamente");
      } catch (error) {
        console.error("Error al eliminar juego:", error);
        alert("Error al eliminar el juego");
      }
    }
  };

  const handleUpdate = async (id) => {
    const newTitle = prompt("Nuevo título:");
    if (newTitle) {
      try {
        await updateGame(id, { title: newTitle });
        loadGames();
        alert("Juego actualizado exitosamente");
      } catch (error) {
        console.error("Error al actualizar juego:", error);
        alert("Error al actualizar el juego");
      }
    }
  };

  const openAssignModal = (game) => {
    setSelectedGame(game);
    setSelectedEditors(game.assignedEditors?.map(e => e._id || e) || []);
    setShowAssignModal(true);
  };

  const handleAssignEditors = async () => {
    try {
      await assignEditors(selectedGame._id, selectedEditors);
      setShowAssignModal(false);
      loadGames();
      alert("Editores asignados exitosamente");
    } catch (error) {
      console.error("Error al asignar editores:", error);
      alert("Error al asignar editores");
    }
  };

  const toggleEditor = (editorId) => {
    setSelectedEditors(prev => {
      if (prev.includes(editorId)) {
        return prev.filter(id => id !== editorId);
      } else {
        return [...prev, editorId];
      }
    });
  };

  return (
    <div className="editor-container">
      <h2>Editor de Juegos</h2>

      {role === "admin" && (
        <div className="create-game-form">
          <h3>Agregar Nuevo Juego</h3>
          <input 
            placeholder="Título" 
            value={title}
            onChange={(e) => setTitle(e.target.value)} 
          />
          <input 
            placeholder="Género" 
            value={genre}
            onChange={(e) => setGenre(e.target.value)} 
          />
          <input 
            placeholder="Año" 
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)} 
          />
          <input 
            placeholder="URL de imagen" 
            value={image}
            onChange={(e) => setImage(e.target.value)} 
          />
          <button onClick={handleCreate}>Agregar Juego</button>
        </div>
      )}

      <div className="games-list">
        {games.map((game) => (
          <div key={game._id} className="game-card">
            <h3>{game.title}</h3>
            <p><strong>Género:</strong> {game.genre}</p>
            <p><strong>Año:</strong> {game.year}</p>
            {game.image && <img src={game.image} alt={game.title} style={{maxWidth: '200px'}} />}
            
            {game.assignedEditors && game.assignedEditors.length > 0 && (
              <div className="assigned-editors">
                <p><strong>Editores asignados:</strong></p>
                <ul>
                  {game.assignedEditors.map(editor => (
                    <li key={editor._id || editor}>
                      {editor.username || editor.email || editor}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {role === "admin" && (
              <div className="game-actions">
                <button onClick={() => handleUpdate(game._id)}>Editar</button>
                <button onClick={() => handleDelete(game._id)}>Eliminar</button>
                <button onClick={() => openAssignModal(game)}>Asignar Editores</button>
              </div>
            )}
          </div>
        ))}
      </div>

      {showAssignModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Asignar Editores a: {selectedGame?.title}</h3>
            
            {editors.length === 0 ? (
              <p>No hay editores disponibles. Crea usuarios con rol "editor" primero.</p>
            ) : (
              <div className="editors-list">
                {editors.map((editor) => (
                  <label key={editor._id} className="editor-checkbox">
                    <input
                      type="checkbox"
                      checked={selectedEditors.includes(editor._id)}
                      onChange={() => toggleEditor(editor._id)}
                    />
                    <span>{editor.username} ({editor.email})</span>
                  </label>
                ))}
              </div>
            )}

            <div className="modal-actions">
              <button onClick={handleAssignEditors} disabled={editors.length === 0}>
                Confirmar Asignación
              </button>
              <button onClick={() => setShowAssignModal(false)}>Cancelar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EditorJuegos;