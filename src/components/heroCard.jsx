

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






