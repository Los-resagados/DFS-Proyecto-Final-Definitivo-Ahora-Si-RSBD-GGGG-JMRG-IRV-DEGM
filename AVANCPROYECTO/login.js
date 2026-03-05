const API_BASE = "https://dfs-proyecto-final-definitivo-ahora-si-rsbd-gggg-production.up.railway.app";

document.addEventListener("DOMContentLoaded", () => {

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

    } catch (error) {
      console.error("ERROR REAL:", error);
      alert("Error en login");
    }

  });

});