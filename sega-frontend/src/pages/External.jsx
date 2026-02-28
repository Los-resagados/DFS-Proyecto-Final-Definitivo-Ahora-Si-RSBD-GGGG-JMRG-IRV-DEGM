import { useEffect, useState } from "react";
import { getGamingNews, getPopularGames, getPokemon } from "../services/externalService";

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
    const data = await getPokemon(pokemonName);
    setPokemon(data);
  };

  return (
    <div>
      <h2>API Externa</h2>

      {/* 📰 Noticias */}
      <h3>Noticias Gaming</h3>
      {news.map((article, index) => (
        <div key={index}>
          <h4>{article.title}</h4>
          <p>{article.description}</p>
        </div>
      ))}

      {/* 🎮 Juegos */}
      <h3>Juegos Populares</h3>
      {games.map((game) => (
        <div key={game.id}>
          <h4>{game.name}</h4>
          <img src={game.background_image} width="200" />
          <p>Rating: {game.rating}</p>
        </div>
      ))}

      {/* 🟣 Pokémon */}
      <h3>Buscar Pokémon</h3>
      <input
        type="text"
        placeholder="Ej: pikachu"
        onChange={(e) => setPokemonName(e.target.value)}
      />
      <button onClick={searchPokemon}>Buscar</button>

      {pokemon && (
        <div>
          <h4>{pokemon.name}</h4>
          <img src={pokemon.sprites?.front_default} />
        </div>
      )}
    </div>
  );
}

export default External;