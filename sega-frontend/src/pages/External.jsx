import { useEffect, useState } from "react";
import { getGamingNews, getPopularGames, getPokemon } from "../services/externalService";
import "../styles/gestores.css";

function External() {
  const [news, setNews] = useState([]);
  const [games, setGames] = useState([]);
  const [pokemon, setPokemon] = useState(null);
  const [pokemonName, setPokemonName] = useState("");

  useEffect(() => {
    loadNews();
    loadGames();
  }, []);

  const loadNews = async () => {
    const data = await getGamingNews();
    setNews(data || []);
  };

  const loadGames = async () => {
    const data = await getPopularGames();
    setGames(data || []);
  };

  const searchPokemon = async () => {
    if (!pokemonName.trim()) return;
    const data = await getPokemon(pokemonName);
    if (data) {
      setPokemon(data);
    }
  };

  const handlePokemonKeyDown = (e) => {
    if (e.key === "Enter") searchPokemon();
  };

  return (
    <div style={{ minHeight: "100vh", paddingTop: 20 }}>
      <div className="panel-container">
        {/* NOTICIAS */}
        <section style={{ marginBottom: 50 }}>
          <h2 style={{ textAlign: "center", marginBottom: 30, fontSize: "2rem", color: "#00b3ff" }}>
            📰 NOTICIAS GAMING
          </h2>
          <div className="panel-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
            {news.length ? (
              news.slice(0, 6).map((article, index) => (
                <div key={index} className="panel-card" style={{ display: "flex", flexDirection: "column" }}>
                  <h3 style={{ marginTop: 0, color: "#0063ff", marginBottom: 10 }}>
                    {article.title.substring(0, 50)}...
                  </h3>
                  <p style={{ fontSize: "0.9rem", opacity: 0.8, flex: 1 }}>
                    {article.description ? article.description.substring(0, 100) + "..." : "Sin descripción"}
                  </p>
                  <a 
                    href={article.url} 
                    target="_blank" 
                    rel="noreferrer"
                    style={{
                      display: "inline-block",
                      marginTop: 10,
                      padding: "8px 16px",
                      background: "linear-gradient(135deg, #0063ff, #00b3ff)",
                      color: "white",
                      textDecoration: "none",
                      borderRadius: "6px",
                      fontSize: "0.85rem",
                      fontWeight: "bold",
                      transition: "0.3s"
                    }}
                    onMouseOver={(e) => e.target.style.transform = "translateY(-2px)"}
                    onMouseOut={(e) => e.target.style.transform = "translateY(0)"}
                  >
                    Leer más
                  </a>
                </div>
              ))
            ) : (
              <p style={{ textAlign: "center", opacity: 0.5 }}>Cargando noticias...</p>
            )}
          </div>
        </section>

        {/* JUEGOS POPULARES */}
        <section style={{ marginBottom: 50 }}>
          <h2 style={{ textAlign: "center", marginBottom: 30, fontSize: "2rem", color: "#38ffee" }}>
            🎮 JUEGOS POPULARES
          </h2>
          <div className="panel-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
            {games.length ? (
              games.slice(0, 6).map((game) => (
                <div key={game.id} className="panel-card" style={{ display: "flex", flexDirection: "column", textAlign: "center" }}>
                  {game.background_image && (
                    <img 
                      src={game.background_image} 
                      alt={game.name}
                      style={{ 
                        borderRadius: "10px", 
                        marginBottom: 15,
                        height: "160px",
                        objectFit: "cover",
                        boxShadow: "0 4px 12px rgba(56, 255, 238, 0.2)"
                      }}
                    />
                  )}
                  <h3 style={{ marginBottom: 8, color: "#38ffee" }}>{game.name}</h3>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginTop: "auto" }}>
                    <span style={{ fontSize: "1.2rem" }}>⭐</span>
                    <span style={{ fontSize: "1.1rem", fontWeight: "bold", color: "#00b3ff" }}>
                      {game.rating.toFixed(1)}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <p style={{ textAlign: "center", opacity: 0.5 }}>Cargando juegos...</p>
            )}
          </div>
        </section>

        {/* POKÉMON */}
        <section>
          <h2 style={{ textAlign: "center", marginBottom: 30, fontSize: "2rem", color: "#ff6b9d" }}>
            🟣 POKÉDEX
          </h2>

          <div style={{ maxWidth: 600, margin: "0 auto 30px", display: "flex", gap: 10 }}>
            <input
              type="text"
              placeholder="Busca un Pokémon (ej: pikachu)"
              value={pokemonName}
              onChange={(e) => setPokemonName(e.target.value)}
              onKeyDown={handlePokemonKeyDown}
              style={{
                flex: 1,
                padding: "12px 14px",
                borderRadius: "8px",
                border: "2px solid #38ffee",
                background: "#0b1c3d",
                color: "white",
                fontSize: "14px",
                outline: "none"
              }}
            />
            <button 
              onClick={searchPokemon}
              style={{
                padding: "12px 24px",
                borderRadius: "8px",
                border: "none",
                background: "linear-gradient(135deg, #ff6b9d, #ff8fab)",
                color: "white",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "0.3s"
              }}
              onMouseOver={(e) => e.target.style.transform = "translateY(-2px)"}
              onMouseOut={(e) => e.target.style.transform = "translateY(0)"}
            >
              BUSCAR
            </button>
          </div>

          {pokemon && (
            <div style={{ maxWidth: 900, margin: "0 auto" }}>
              <div className="panel-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
                <div className="panel-card" style={{ textAlign: "center" }}>
                  <h3 style={{ margin: "0 0 15px 0", color: "#ff6b9d", textTransform: "capitalize", fontSize: "1.5rem" }}>
                    {pokemon.name}
                  </h3>
                  {pokemon.sprites?.front_default && (
                    <img 
                      src={pokemon.sprites.front_default} 
                      alt={pokemon.name}
                      style={{ height: 180, marginBottom: 15 }}
                    />
                  )}
                  {pokemon.sprites?.back_default && (
                    <img 
                      src={pokemon.sprites.back_default} 
                      alt={pokemon.name}
                      style={{ height: 180, marginBottom: 15 }}
                    />
                  )}
                  <div style={{ marginTop: 15, textAlign: "left", fontSize: "0.9rem" }}>
                    {pokemon.types && (
                      <p>
                        <strong>Tipo(s):</strong> {pokemon.types.map(t => t.type.name).join(", ")}
                      </p>
                    )}
                    {pokemon.height && (
                      <p><strong>Altura:</strong> {(pokemon.height / 10).toFixed(1)} m</p>
                    )}
                    {pokemon.weight && (
                      <p><strong>Peso:</strong> {(pokemon.weight / 10).toFixed(1)} kg</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default External;