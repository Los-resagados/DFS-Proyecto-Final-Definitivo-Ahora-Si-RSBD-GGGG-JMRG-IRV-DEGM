const API = "http://localhost:3000/api/games";

export const getGames = async () => {
  const token = localStorage.getItem("token");

  const response = await fetch(API, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.json();
};

export const createGame = async (game) => {
  const token = localStorage.getItem("token");

  await fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(game),
  });
};

export const deleteGame = async (id) => {
  const token = localStorage.getItem("token");

  await fetch(`${API}/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateGame = async (id, game) => {
  const token = localStorage.getItem("token");

  await fetch(`${API}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(game),
  });
};