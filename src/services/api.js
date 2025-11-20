/*// src/services/api.js
import axios from "axios";

// 🔍 Verifica si la variable de entorno se está leyendo correctamente
console.log("🌐 Base URL actual:", import.meta.env.VITE_API_URL);

// La base de la API, tomada del .env
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, 
});

// ---------- CRUD DE SUPERHÉROES ----------

// Obtener todos los héroes
export const getHeroes = async () => {
  const res = await api.get("/super");
  return res.data;
};

// Obtener un héroe por ID
export const getHeroById = async (id) => {
  const res = await api.get(`/${id}`);
  return res.data;
};

// Crear un nuevo héroe
export const createHero = async (heroData) => {
  console.log("🦸 Enviando héroe a MockAPI:", heroData);
  const res = await api.post("/super", heroData);
  return res.data;
};

// Actualizar un héroe
export const updateHero = async (id, heroData) => {
  console.log("✏️ Actualizando héroe:", id, heroData);
  const res = await api.put(`/${id}`, heroData);
  return res.data;
};

// Eliminar un héroe
export const deleteHero = async (id) => {
  console.log("🗑️ Eliminando héroe con ID:", id);
  const res = await api.delete(`/${id}`);
  return res.data;
};

export default api;*/

/*import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const getHeroes = async () => {
  const res = await api.get("/super");
  return res.data;
};

export const getHeroById = async (id) => {
  const res = await api.get(`/${id}`);
  return res.data;
};

export const createHero = async (heroData) => {
  const res = await api.post("/super", heroData);
  return res.data;
};

export const updateHero = async (id, heroData) => {
  const res = await api.put(`/${id}`, heroData);
  return res.data;
};

export const deleteHero = async (id) => {
  const res = await api.delete(`/${id}`);
  return res.data;
};

export default api;*/

import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // debe terminar en /super
});

// Obtener todos los héroes
export const getHeroes = async () => {
  const res = await api.get("/");
  return res.data;
};

// Obtener héroe por ID
export const getHeroById = async (id) => {
  const res = await api.get(`/${id}`);
  return res.data;
};

// Crear héroe
export const createHero = async (heroData) => {
  const res = await api.post("/", heroData);
  return res.data;
};

// Actualizar héroe
export const updateHero = async (id, heroData) => {
  const res = await api.put(`/${id}`, heroData);
  return res.data;
};

// Borrar héroe
export const deleteHero = async (id) => {
  const res = await api.delete(`/${id}`);
  return res.data;
};

export default api;





