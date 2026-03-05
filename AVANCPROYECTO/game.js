const API_BASE = "https://dfs-proyecto-final-definitivo-ahora-si-rsbd-gggg-production.up.railway.app";

const params = new URLSearchParams(window.location.search);
const gameId = params.get("id");

const titleEl = document.getElementById("game-title");
const genreEl = document.getElementById("game-genre");
const yearEl = document.getElementById("game-year");
const imageEl = document.getElementById("game-image");
const trailerContainer = document.getElementById("game-trailer-container");
const descEl = document.getElementById("game-description");

async function loadGame() {
  if (!gameId) {
    titleEl.textContent = "Juego no especificado";
    return;
  }

  try {
    const response = await fetch(`${API_BASE}/api/games/${gameId}`);
    if (!response.ok) throw new Error("No encontrado");

    const data = await response.json();
    const game = data.data;

    titleEl.textContent = game.title;
    genreEl.textContent = game.genre || "-";
    yearEl.textContent = game.year || "-";

    // ✅ Imagen principal
    imageEl.src = game.image
      ? `${API_BASE}/images/juegos/${game.image}`
      : `${API_BASE}/images/juegos/SINIMGS.png`;

    imageEl.alt = game.title || "";
    imageEl.onerror = () => {
      imageEl.src = `${API_BASE}/images/juegos/SINIMGS.png`;
    };

    descEl.innerHTML = game.description || "Sin descripción";

    // ===== Trailer =====
    if (game.trailer) {
      trailerContainer.innerHTML = `
        <iframe 
          src="${game.trailer}" 
          frameborder="0"
          allowfullscreen
          style="position:absolute;top:0;left:0;width:100%;height:100%;">
        </iframe>
      `;
    } else {
      trailerContainer.innerHTML = "<p>No hay tráiler disponible.</p>";
    }

    const rightColumn = imageEl.parentElement;

    // ===== Sinopsis =====
    if (game.sinopsis) {
      const p = document.createElement("p");
      p.style.marginTop = "15px";
      p.style.fontStyle = "italic";
      p.textContent = game.sinopsis;
      rightColumn.appendChild(p);
    }

    // ===== Galería =====
    if (game.images?.length) {
      const gallery = document.createElement("div");

      game.images.forEach(imgName => {
        const img = document.createElement("img");
        img.src = imgName
          ? `${API_BASE}/images/juegosextras/${imgName}`
          : `${API_BASE}/images/juegosextras/SINIMGS.png`;

        img.onerror = () => {
          img.src = `${API_BASE}/images/juegosextras/SINIMGS.png`;
        };

        img.style.width = "100%";
        img.style.maxWidth = "300px";
        img.style.marginTop = "10px";

        gallery.appendChild(img);
      });

      rightColumn.appendChild(gallery);
    }

    // ===== Comprar =====
    if (game.comprar?.length) {
      const comprarContainer = document.createElement("div");
      comprarContainer.style.marginTop = "15px";

      game.comprar.forEach(store => {
        const a = document.createElement("a");
        a.href = store.link || "#";
        a.target = "_blank";

        const img = document.createElement("img");
        img.src = store.logo
          ? `${API_BASE}/images/logos/${store.logo}`
          : `${API_BASE}/images/logos/SINIMGS.png`;

        img.onerror = () => {
          img.src = `${API_BASE}/images/logos/SINIMGS.png`;
        };

        img.style.height = "40px";
        img.style.margin = "5px";

        a.appendChild(img);
        comprarContainer.appendChild(a);
      });

      rightColumn.appendChild(comprarContainer);
    }

  } catch (error) {
    console.error(error);
    titleEl.textContent = "Error cargando juego";
  }
}

loadGame();