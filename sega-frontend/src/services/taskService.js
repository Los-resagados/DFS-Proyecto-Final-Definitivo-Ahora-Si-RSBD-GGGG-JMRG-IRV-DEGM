import { API_URL } from "./config";

const API = API_URL + "/api/tareas";

export const getTareas = async (page = 1, limit = 5, titulo = "") => {
  const token = localStorage.getItem("token");
  
  let url = `${API}?page=${page}&limit=${limit}`;
  if (titulo) {
    url += `&titulo=${encodeURIComponent(titulo)}`;
  }

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.json();
};

export const createTarea = async (tarea) => {
  const token = localStorage.getItem("token");

  const response = await fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(tarea),
  });

  return response.json();
};

export const updateTarea = async (id, tarea) => {
  const token = localStorage.getItem("token");

  const response = await fetch(`${API}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(tarea),
  });

  return response.json();
};

export const deleteTarea = async (id) => {
  const token = localStorage.getItem("token");

  const response = await fetch(`${API}/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.json();
};
