document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("login-form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const username = form.username.value.trim();
        const password = form.password.value.trim();

        const user = users.find(u => 
            u.username === username && u.password === password
        );

        if (user) {
            // guardar sesión
            localStorage.setItem("loggedUser", JSON.stringify(user));

            if (user.role === "admin") {
                window.location.href = "../ACT_2/salaadmin.html";

            } else if (user.role === "editor") {
                window.location.href = "../ACT_2/salaadmin.html";

            } else {
                window.location.href = "../index.html";
            }

        } else {
            alert("Usuario o contraseña incorrectos");
        }
    });

});
