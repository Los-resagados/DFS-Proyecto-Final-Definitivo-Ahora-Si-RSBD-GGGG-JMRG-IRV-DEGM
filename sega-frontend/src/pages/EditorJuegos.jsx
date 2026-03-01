import "../styles/paginas.css";
import { useEffect, useState } from "react";
import { getGames, createGame, deleteGame, updateGame } from "../services/gameService";

function EditorJuegos() {
  const [games, setGames] = useState([]);
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");

  const role = localStorage.getItem("role");

  useEffect(() => {
    loadGames();
  }, []);

  const loadGames = async () => {
    const data = await getGames();
    setGames(data);
  };

  const handleCreate = async () => {
    await createGame({ title, genre, year });
    loadGames();
  };

  const handleDelete = async (id) => {
    await deleteGame(id);
    loadGames();
  };

  const handleUpdate = async (id) => {
    const newTitle = prompt("Nuevo título:");
    await updateGame(id, { title: newTitle });
    loadGames();
  };

  return (
    <div>
      <h2>Editor de Juegos</h2>

      {role === "admin" && (
        <div>
          <input placeholder="Título" onChange={(e) => setTitle(e.target.value)} />
          <input placeholder="Género" onChange={(e) => setGenre(e.target.value)} />
          <input placeholder="Año" onChange={(e) => setYear(e.target.value)} />
          <button onClick={handleCreate}>Agregar Juego</button>
        </div>
      )}

      {games.map((game) => (
        <div key={game._id}>
          <h3>{game.title}</h3>
          <p>{game.genre}</p>

          {role === "admin" && (
            <>
              <button onClick={() => handleUpdate(game._id)}>Editar</button>
              <button onClick={() => handleDelete(game._id)}>Eliminar</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default EditorJuegos;