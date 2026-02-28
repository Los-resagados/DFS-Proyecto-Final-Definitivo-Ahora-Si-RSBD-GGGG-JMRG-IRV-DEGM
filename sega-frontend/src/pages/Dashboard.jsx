import { Link } from "react-router-dom";

function Dashboard() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div>
      <h2>Dashboard</h2>

      <br />
      <Link to="/editor">🎮 Ir al Editor de Juegos</Link>

      <br />
      <br />
      <Link to="/tareas">📋 Ir al Gestor de Tareas</Link>

      <br />
      <br />
      <Link to="/external">🌍 API Externa</Link>

      <br />
      <br />
      <button onClick={handleLogout}>
        Cerrar sesión
      </button>
    </div>
  );
}

export default Dashboard;