import { useEffect, useState } from "react";
import { getPopularGames } from "../services/externalService";

function ExternalGames() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    loadGames();
  }, []);

  const loadGames = async () => {
    const data = await getPopularGames();
    setGames(data.results || []);
  };

  return (
    <div>
      <h2>Juegos desde API Externa</h2>

      {games.map((game) => (
        <div key={game.id}>
          <h3>{game.name}</h3>
          <img src={game.background_image} width="200" alt={game.name} />
          <p>Rating: {game.rating}</p>
        </div>
      ))}
    </div>
  );
}

export default ExternalGames;