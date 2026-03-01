import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <Link to="/editor">Ir al Editor de Juegos</Link>
      <br />
      <Link to="/tareas">Ir al Gestor de Tareas</Link>
      <br />
      <button
        onClick={() => {
          localStorage.removeItem("token");
          window.location.href = "/";
        }}
      >
        Cerrar sesión
      </button>
    </div>
  );
}

export default Dashboard;