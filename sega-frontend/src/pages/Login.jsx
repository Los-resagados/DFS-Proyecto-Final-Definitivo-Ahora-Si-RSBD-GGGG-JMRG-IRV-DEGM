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

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Usuario"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}

export default Login;