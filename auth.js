function getLoggedUser() {
    return JSON.parse(localStorage.getItem("loggedUser"));
}

function requireLogin() {
    const user = getLoggedUser();
    if (!user) {
        window.location.href = "../AVANCPROYECTO/login.html";
    }
    return user;
}

function requireRole(roles = []) {
    const user = requireLogin();

    if (!roles.includes(user.role)) {
        alert("No tienes permisos para entrar aquí");
        window.location.href = "../index.html";
    }

    return user;
}
