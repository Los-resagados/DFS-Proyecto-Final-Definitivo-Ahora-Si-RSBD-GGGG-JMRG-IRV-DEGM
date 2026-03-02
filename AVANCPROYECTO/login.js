const API_URL = "http://localhost:3000/api/auth/login";

document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("login-form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = form.username.value;
    const password = form.password.value;

    try {

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Credenciales incorrectas");
        return;
      }

      // Guardar sesión
      localStorage.setItem("loggedUser", JSON.stringify({
        username: data.username,
        role: data.role,
        token: data.token
      }));

      alert("Inicio de sesión exitoso ⚡");

      // Redirección
      if (data.role === "admin") {
        window.location.href = "editorjuegos.html";
      } else {
        window.location.href = "../index.html";
      }

    } catch (error) {
      console.error(error);
      alert("No se pudo conectar con el servidor");
    }

  });

});