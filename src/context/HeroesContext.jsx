/*import { createContext, useState, useEffect } from "react";
import api from "../services/api.js";

export const HeroesContext = createContext();

export const HeroesProvider = ({ children }) => {
  const [heroes, setHeroes] = useState([]);
  const [favorites, setFavorites] = useState([]);

  // 🔹 Cargar héroes desde la API
  const fetchHeroes = async () => {
    try {
      const { data } = await api.get("/super");
      setHeroes(data);
    } catch (error) {
      console.error("Error al obtener héroes:", error);
    }
  };

  // 🔹 Agregar favorito
  const addFavorite = (hero) => {
    if (!favorites.find((f) => f.id === hero.id)) {
      setFavorites([...favorites, hero]);
    }
  };

  // 🔹 Quitar favorito
  const removeFavorite = (id) => {
    setFavorites(favorites.filter((f) => f.id !== id));
  };

  useEffect(() => {
    fetchHeroes();
  }, []);

  return (
    <HeroesContext.Provider
      value={{ heroes, setHeroes, favorites, addFavorite, removeFavorite, fetchHeroes }}
    >
      {children}
    </HeroesContext.Provider>
  );
};*/

/*import { createContext, useState, useEffect } from "react";
import api from "../services/api.js";

export const HeroesContext = createContext();

export const HeroesProvider = ({ children }) => {
  const [heroes, setHeroes] = useState([]);
  const [favorites, setFavorites] = useState([]);

  // 🔹 Cargar héroes desde la API
  const fetchHeroes = async () => {
    try {
      const response = await api.get("/super");

      console.log("BACKEND RESPONDE:", response.data);

      // 👇 MockAPI devuelve un ARRAY DIRECTO
      const lista = Array.isArray(response.data)
        ? response.data
        : [];

      setHeroes(lista);

    } catch (error) {
      console.error("Error al obtener héroes:", error);
    }
  };

  // 🔹 Agregar favorito
  const addFavorite = (hero) => {
    if (!favorites.find((f) => f.id === hero.id)) {
      setFavorites([...favorites, hero]);
    }
  };

  // 🔹 Quitar favorito
  const removeFavorite = (id) => {
    setFavorites(favorites.filter((f) => f.id !== id));
  };

  useEffect(() => {
    fetchHeroes();
  }, []);

  return (
    <HeroesContext.Provider
      value={{
        heroes,
        setHeroes,
        favorites,
        addFavorite,
        removeFavorite,
        fetchHeroes,
      }}
    >
      {children}
    </HeroesContext.Provider>
  );
};
*/

// src/context/HeroesContext.jsx
import { createContext, useState, useEffect } from "react";
import api from "../services/api";

export const HeroesContext = createContext(); // 👈 ESTE NOMBRE DEBE COINCIDIR

export const HeroesProvider = ({ children }) => {
  const [heroes, setHeroes] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const fetchHeroes = async () => {
    try {
      const response = await api.get("/su");
      setHeroes(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error("Error al obtener héroes:", error);
    }
  };

  const addFavorite = (hero) => {
    if (!favorites.some((f) => f.id === hero.id)) {
      setFavorites((prev) => [...prev, hero]);
    }
  };

  const removeFavorite = (id) => {
    setFavorites((prev) => prev.filter((f) => f.id !== id));
  };

  useEffect(() => {
    fetchHeroes();
  }, []);

  return (
    <HeroesContext.Provider
      value={{
        heroes,
        setHeroes,
        favorites,
        addFavorite,
        removeFavorite,
        fetchHeroes,
      }}
    >
      {children}
    </HeroesContext.Provider>
  );
};







