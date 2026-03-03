import { API_URL } from "./config";

const API = API_URL + "/api/auth";

export const loginUser = async (username, password) => {
  const response = await fetch(`${API}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  return await response.json();
};