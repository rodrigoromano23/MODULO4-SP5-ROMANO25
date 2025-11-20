

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







