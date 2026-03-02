import { Link, useSearchParams } from "react-router-dom";
import { useEffect } from "react";

function Dashboard() {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    // Capturar token y role de los parámetros de URL (del callback de OAuth)
    const token = searchParams.get("token");
    const role = searchParams.get("role");

    if (token && role) {
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
      // Limpiar la URL
      window.history.replaceState({}, document.title, "/dashboard");
    }
  }, [searchParams]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
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