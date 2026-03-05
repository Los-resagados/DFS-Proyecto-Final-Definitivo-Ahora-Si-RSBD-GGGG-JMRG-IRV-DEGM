import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";
import "../styles/paginas.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const data = await loginUser(username, password);

    if (data.token) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);
      navigate("/dashboard");
    } else {
      alert("Credenciales incorrectas");
    }
  };

  const handleOAuth = (provider) => {
    // Bloqueado: No redirige a APIs externas
    alert(`Inicio de sesión con ${provider} está bloqueado.`);
  };

  return (
    <div className="sonic-login">
      <div className="login-container">
        <div className="sega-title">SEGA</div>
        <div className="sonic-subtitle">Inicia sesión para continuar</div>

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>USUARIO</label>
            <input
              type="text"
              placeholder="Ingresa tu usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>CONTRASEÑA</label>
            <input
              type="password"
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="start-btn">INGRESAR</button>
        </form>

        <div style={{ margin: "20px 0", textAlign: "center", opacity: 0.7 }}>O</div>

        <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
          <button 
            onClick={() => handleOAuth('google')} 
            className="start-btn" 
            style={{ background: "linear-gradient(135deg, #db4437, #ea4335)", marginBottom: 0 }}
          >
            🔴 GOOGLE
          </button>
          <button 
            onClick={() => handleOAuth('microsoft')} 
            className="start-btn" 
            style={{ background: "linear-gradient(135deg, #2F2F2F, #1F1F1F)", marginBottom: 0 }}
          >
            ◻ MICROSOFT
          </button>
        </div>

        <div className="footer">© 2026 SEGA Gaming Platform</div>
      </div>
    </div>
  );
}

export default Login;