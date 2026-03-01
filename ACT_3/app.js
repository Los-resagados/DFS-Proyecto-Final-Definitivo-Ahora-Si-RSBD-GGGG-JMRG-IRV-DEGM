// ================= Usuario logueado =================
const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

// Bloqueo de seguridad
const ES_ADMIN = loggedUser?.role === "admin";
const ES_EDITOR = loggedUser?.role === "editor";
const PUEDE_MODIFICAR = ES_ADMIN;
const PUEDE_COMPLETAR = ES_ADMIN || ES_EDITOR;

// ================= Ir a Editor de Juegos =================
const btnEditor = document.getElementById("ir-editor");
if (btnEditor) {
    btnEditor.addEventListener("click", () => {
        window.location.href = "../AVANCPROYECTO/editorjuegos.html";
    });
}

// ================= Clase Tarea =================
class Tarea {
    constructor(titulo, asignadoA, fechaLimite, asignadoPor) {
        this.id = Date.now().toString();
        this.titulo = titulo;
        this.asignadoA = asignadoA;
        this.asignadoPor = asignadoPor; // nuevo campo
        this.fechaPublicacion = new Date().toISOString().split("T")[0];
        this.fechaLimite = fechaLimite;
        this.completada = false;
    }

    cambiarEstado() {
        this.completada = !this.completada;
    }
}


// ================= Gestor =================
class GestorDeTareas {
    constructor() {
        this.tareas = JSON.parse(localStorage.getItem("tareas")) || [];
    }

    agregar(tarea) {
        this.tareas.push(tarea);
        this.guardar();
    }

    eliminar(id) {
        this.tareas = this.tareas.filter(t => t.id !== id);
        this.guardar();
    }

    guardar() {
        localStorage.setItem("tareas", JSON.stringify(this.tareas));
    }
}

const gestor = new GestorDeTareas();

// ================= DOM =================
const lista = document.getElementById("listaTareas");
const contador = document.getElementById("contador");

const tituloInput = document.getElementById("tituloTarea");
const fechaLimiteInput = document.getElementById("fechaLimite");
const btnAgregar = document.getElementById("agregar");

// ================= Custom Select =================
const editorWrapper = document.getElementById("editorAsignadoWrapper");
const selectedDiv = editorWrapper?.querySelector(".selected");
const optionsList = editorWrapper?.querySelector(".options");

function getEditorValue() {
    return selectedDiv?.textContent === "Asignar a editor..." ? "" : selectedDiv?.textContent;
}

if (ES_ADMIN && editorWrapper) {
    const users = JSON.parse(localStorage.getItem("usuarios")) || [];
    const editores = users.filter(u => u.role === "editor" || u.rol === "editor");

    if (editores.length === 0) {
        const li = document.createElement("li");
        li.textContent = "No hay editores registrados";
        li.style.color = "rgba(255,255,255,0.6)";
        li.style.cursor = "not-allowed";
        optionsList.appendChild(li);
    } else {
        editores.forEach(editor => {
            const nombre = editor.username || editor.user || editor.nombre;
            const li = document.createElement("li");
            li.textContent = nombre;
            li.dataset.value = nombre;
            optionsList.appendChild(li);

            li.addEventListener("click", () => {
                selectedDiv.textContent = li.dataset.value;
                optionsList.style.display = "none";
            });
        });
    }

    // Abrir/cerrar dropdown
    selectedDiv.addEventListener("click", (e) => {
        e.stopPropagation();
        optionsList.style.display = optionsList.style.display === "block" ? "none" : "block";
    });

    // Cerrar al hacer click fuera
    document.addEventListener("click", () => {
        optionsList.style.display = "none";
    });
}

// ================= Render =================
function render() {
    if (!lista) return;
    lista.innerHTML = "";

    const visibles = ES_ADMIN
        ? gestor.tareas
        : gestor.tareas.filter(t => t.asignadoA === loggedUser?.username);

    visibles.forEach(tarea => {
        const li = document.createElement("li");
        li.className = "tarea-item";

        if (tarea.completada) li.classList.add("completada");

        // detectar vencida
        const hoy = new Date().toISOString().split("T")[0];
        if (!tarea.completada && tarea.fechaLimite < hoy) li.classList.add("vencida");

        li.innerHTML = `
            <div class="tarea-izq">
                <input type="checkbox" ${tarea.completada ? "checked" : ""}>
                <span class="tarea-texto">${tarea.titulo}</span>
            </div>
            <div class="tarea-info">
                <small>Asignado a: <b>${tarea.asignadoA}</b></small><br>
                <small>Asignado por: <b>${tarea.asignadoPor}</b></small><br> <!-- nuevo -->
                <small>Publicada: ${tarea.fechaPublicacion}</small><br>
                <small>Límite: ${tarea.fechaLimite}</small>
            </div>
            ${ES_ADMIN ? `
            <div class="tarea-botones">
                <button class="editar">Editar</button>
                <button class="eliminar">Eliminar</button>
            </div>` : ""}
        `;

        // Completar
        li.querySelector("input").addEventListener("change", () => {
            if (!PUEDE_COMPLETAR) return;
            tarea.completada = !tarea.completada;
            gestor.guardar();
            render();
        });

        // Eliminar
        if (ES_ADMIN) {
            li.querySelector(".eliminar").addEventListener("click", () => {
                gestor.eliminar(tarea.id);
                render();
            });
        }

        // Editar
        if (ES_ADMIN) {
            li.querySelector(".editar").addEventListener("click", () => {
                const nuevoTitulo = prompt("Nuevo título:", tarea.titulo);
                if (!nuevoTitulo) return;

                const nuevaFecha = prompt("Nueva fecha límite (YYYY-MM-DD):", tarea.fechaLimite);
                if (!nuevaFecha) return;

                tarea.titulo = nuevoTitulo;
                tarea.fechaLimite = nuevaFecha;

                gestor.guardar();
                render();
            });
        }

        lista.appendChild(li);
    });

    const pendientes = visibles.filter(t => !t.completada).length;
    if (contador) contador.textContent = `Tareas pendientes: ${pendientes}`;
}


// ================= Crear tarea =================
if (btnAgregar) {
    btnAgregar.addEventListener("click", () => {

        if (!ES_ADMIN) {
            alert("No tienes permisos para crear tareas");
        return;
        }

        const titulo = tituloInput.value.trim();
        const editor = getEditorValue();
        const fechaLimite = fechaLimiteInput.value;
        const asignadoPor = loggedUser?.username; // nuevo campo

        if (!titulo || !editor || !fechaLimite) {
            alert("Completa todos los campos");
            return;
        }

        gestor.agregar(new Tarea(titulo, editor, fechaLimite, asignadoPor));

        // limpiar inputs
        tituloInput.value = "";
        fechaLimiteInput.value = "";
        selectedDiv.textContent = "Asignar a editor...";

        render();
    });

}


// ================= Inicial =================
render();