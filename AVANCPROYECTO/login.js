const API_BASE = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
  ? "http://localhost:3000"
  : "https://dfs-proyecto-final-definitivo-ahora-si-rsbd-gggg-production.up.railway.app";

console.log("🔗 Conectando con API_BASE:", API_BASE);

document.addEventListener("DOMContentLoaded", () => {

  // Login Tradicional
  const form = document.getElementById("login-form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = form.username.value;
    const password = form.password.value;

    try {

      const response = await fetch(`${API_BASE}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
      });

      const data = await response.json();

      console.log("RESPUESTA:", data);

      if (!response.ok) {
        alert(data.message || "Credenciales incorrectas");
        return;
      }

      alert("Login correcto");
      if (data.token) {
        const userObj = { username: data.username, role: data.role, token: data.token };
        localStorage.setItem("loggedUser", JSON.stringify(userObj));
        localStorage.setItem("token", data.token);
        localStorage.setItem("username", data.username);
        localStorage.setItem("role", data.role);
      }

      if (data.role === "admin" || data.role === "editor") {
        window.location.href = "../ACT_2/salaadmin.html";
      } else {
        window.location.href = "../index.html";
      }

    } catch (error) {
      console.error("ERROR REAL:", error);
      alert("Error en login");
    }

  });

  // OAuth Google
  const googleBtn = document.getElementById("google-btn");
  if (googleBtn) {
    googleBtn.addEventListener("click", () => {
      console.log("🔵 Iniciando OAuth Google...");
      window.location.href = `${API_BASE}/api/auth/google`;
    });
  }

  // OAuth Microsoft
  const microsoftBtn = document.getElementById("microsoft-btn");
  if (microsoftBtn) {
    microsoftBtn.addEventListener("click", () => {
      console.log("⬜ Iniciando OAuth Microsoft...");
      window.location.href = `${API_BASE}/api/auth/microsoft`;
    });
  }

});