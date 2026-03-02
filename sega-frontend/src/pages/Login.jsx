import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";

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

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:3000/auth/google";
  };

  const handleMicrosoftLogin = () => {
    window.location.href = "http://localhost:3000/auth/microsoft";
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Ingresar</button>
      </form>

      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <p>O inicia sesión con:</p>
        <button 
          onClick={handleGoogleLogin}
          style={{
            marginRight: "10px",
            padding: "10px 20px",
            backgroundColor: "#DB4437",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer"
          }}
        >
          Google
        </button>
        <button 
          onClick={handleMicrosoftLogin}
          style={{
            padding: "10px 20px",
            backgroundColor: "#0078D4",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer"
          }}
        >
          Microsoft
        </button>
      </div>
    </div>
  );
}

export default Login;