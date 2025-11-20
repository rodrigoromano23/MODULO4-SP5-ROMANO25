import { useContext } from "react";
import { HeroesContext } from "../context/HeroesContext";
import { toast } from "react-toastify";

const Favorites = () => {
  const { favorites, removeFavorite } = useContext(HeroesContext);

  const handleRemove = (id, nombre) => {
    removeFavorite(id);

    toast.error(` ${nombre} eliminado de favoritos`, {
      position: "top-right",
    });
  };

  return (
    <div className="min-h-screen pt-24 px-4 sm:px-6">
      <h1 className="text-2xl sm:text-3xl text-center text-blue-600 font-bold mb-6">
        Héroes Favoritos
      </h1>

      {favorites.length === 0 ? (
        <p className="text-center text-gray-600">
          No tienes héroes favoritos aún...
        </p>
      ) : (
        <div
          className="
            grid 
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4 
            gap-6
          "
        >
          {favorites.map((hero) => {
            const img =
              hero.imagen ||
              hero.foto ||
              hero.descripcion ||
              "https://via.placeholder.com/150?text=Sin+imagen";

            return (
              <div
                key={hero.id}
                className="
                  bg-white/90 
                  rounded-2xl 
                  p-4 
                  text-center 
                  shadow-lg 
                  relative 
                  flex flex-col 
                  items-center
                "
              >
                <img
                  src={img}
                  alt={hero.nombre}
                  className="
                    w-28 h-28 
                    sm:w-32 sm:h-32 
                    object-cover 
                    rounded-full 
                    mx-auto 
                    shadow-md
                  "
                  onError={(e) =>
                    (e.target.src =
                      "https://via.placeholder.com/150?text=No+IMG")
                  }
                />

                <h3 className="font-bold text-lg sm:text-xl mt-3">
                  {hero.nombre}
                </h3>

                <button
                  title="Eliminar de favoritos"
                  onClick={() => handleRemove(hero.id, hero.nombre)}
                  className="
                    absolute 
                    top-3 
                    right-3 
                    text-red-500 
                    hover:text-red-700 
                    text-xl
                    sm:text-2xl
                  "
                >
                  ✖
                </button>

                {hero.planetaOrigen && (
                  <p className="text-sm sm:text-base text-gray-600 mt-2">
                    {hero.planetaOrigen}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Favorites;


