/*import { useContext } from "react";
import { HeroesContext } from "../context/HeroesContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import api from "../services/api";

const HeroCard = ({ hero }) => {
  const { addFavorite, fetchHeroes } = useContext(HeroesContext);
  const navigate = useNavigate();

  const handleDelete = async () => {
    const confirm = await Swal.fire({
      title: "¿Eliminar héroe?",
      text: "No podrás revertir esta acción",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
    });
    if (confirm.isConfirmed) {
      await api.delete(`/super/${hero.id}`);
      fetchHeroes();
      Swal.fire("Eliminado!", "El héroe fue eliminado.", "success");
    }
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg text-center">
      <img
        src={hero.imagen}
        alt={hero.nombre}
        className="w-32 h-32 object-cover rounded-full mx-auto mb-2"
      />
      <h3 className="font-bold text-lg">{hero.nombre}</h3>
      <p className="text-sm text-gray-600">{hero.planetaOrigen}</p>

      <div className="flex justify-around mt-3">
        <button
          onClick={() => navigate(`/heroes/${hero.id}/edit`)}
          className="text-blue-600 hover:underline"
        >
          Editar
        </button>
        <button onClick={handleDelete} className="text-red-600 hover:underline">
          Eliminar
        </button>
        <button
          onClick={() => addFavorite(hero)}
          className="text-yellow-500 hover:underline"
        >
          ⭐
        </button>
      </div>
    </div>
  );
};

export default HeroCard;*/

/*import { useContext } from "react";
import { HeroesContext } from "../context/HeroesContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import api from "../services/api";

const HeroCard = ({ hero }) => {
  const { addFavorite, fetchHeroes } = useContext(HeroesContext);
  const navigate = useNavigate();

  const handleDelete = async () => {
    const confirm = await Swal.fire({
      title: "¿Eliminar héroe?",
      text: "No podrás revertir esta acción",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
    });
    if (confirm.isConfirmed) {
      await api.delete(`/su/${hero.id}`);
      await fetchHeroes();
      Swal.fire("Eliminado!", "El héroe fue eliminado.", "success");
    }
  };

  // nombre y planeta con fallback por si varía el campo
  const nombre = hero.nombre || hero.name || "Sin nombre";
  const planeta = hero.planeta || hero.planetaOrigen || "";

  return (
    <div className="flex items-center justify-between gap-4">
      {/* Left: nombre y subtítulo /}
      <div className="flex items-center gap-3">
        {/* Si querés mantener una mini-mini imagen si existe /}
        {hero.imagen ? (
          <img
            src={hero.imagen}
            alt={nombre}
            className="w-10 h-10 object-cover rounded-full"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-xs text-gray-600">
            {nombre.charAt(0) || "?"}
          </div>
        )}

        <div>
          <div className="font-medium text-lg text-gray-800">{nombre}</div>
          {planeta && <div className="text-xs text-gray-500">{planeta}</div>}
        </div>
      </div>

      {/* Right: acciones /}
      <div className="flex items-center gap-4">
        <button
          onClick={() => navigate(`/heroes/${hero.id}/edit`)}
          className="text-sm text-blue-600 hover:underline"
        >
          Editar
        </button>

        <button
          onClick={handleDelete}
          className="text-sm text-red-600 hover:underline"
        >
          Eliminar
        </button>

        <button
          onClick={() => addFavorite(hero)}
          className="text-sm text-yellow-500 hover:underline"
          aria-label="Agregar a favoritos"
        >
          Favorito
        </button>
      </div>
    </div>
  );
};

export default HeroCard;*/

import { useContext } from "react";
import { HeroesContext } from "../context/HeroesContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import api from "../services/api";
import { toast } from "react-toastify";

const HeroCard = ({ hero }) => {
  const { addFavorite, fetchHeroes } = useContext(HeroesContext);
  const navigate = useNavigate();

  const handleDelete = async () => {
    const confirm = await Swal.fire({
      title: "¿Eliminar héroe?",
      text: "No podrás revertir esta acción",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
    });

    if (confirm.isConfirmed) {
      await api.delete(`/su/${hero.id}`);
      await fetchHeroes();
      Swal.fire("Eliminado!", "El héroe fue eliminado.", "success");
    }
  };

  const handleAddFavorite = () => {
    addFavorite(hero);

    toast.success(` ${nombre} agregado a favoritos`, {
      position: "top-right",
    });
  };

  const nombre = hero.nombre || hero.name || "Sin nombre";

  return (
    <div
      className="
        bg-white p-4 rounded shadow
        flex flex-col sm:flex-row sm:items-center sm:justify-between
        gap-4
      "
    >
      {/* Nombre */}
      <div className="font-medium text-lg text-gray-800 text-center sm:text-left">
        {nombre}
      </div>

      {/* Acciones */}
      <div
        className="
          flex flex-wrap justify-center sm:justify-end
          gap-4
        "
      >
        <button
          onClick={() => navigate(`/heroes/${hero.id}/edit`)}
          className="text-sm text-blue-600 hover:underline"
        >
          Editar
        </button>

        <button
          onClick={handleDelete}
          className="text-sm text-red-600 hover:underline"
        >
          Eliminar
        </button>

        <button
          onClick={handleAddFavorite}
          className="text-sm text-yellow-500 hover:underline"
          aria-label="Agregar a favoritos"
        >
          Favorito
        </button>
      </div>
    </div>
  );
};

export default HeroCard;






