
//--------------------------------funcional----------------------------
import { useContext, useEffect } from "react";
import { HeroesContext } from "../context/HeroesContext";
import HeroCard from "../components/heroCard";
import { toast } from "react-toastify";

const HeroesList = () => {
  const { heroes, fetchHeroes } = useContext(HeroesContext);

  // 👉 Recargar lista al montar la vista
  useEffect(() => {
    fetchHeroes();

    if (location.state?.fromCreate) {
      toast.info("✔ El superhéroe ya está en la lista");
    }
    //notificacion para favoritos
    if (location.state?.addedToFavorites) {
      toast.success(" Agregado a favoritos", {
        position: "top-right",
      });
    }
  }, []);

  return (
    <div className="min-h-screen pt-24 p-6">
      <h1 className="text-3xl text-center text-blue-600 font-bold mb-8">
        Lista de Superhéroes
      </h1>

      {heroes.length === 0 ? (
        <p className="text-center text-gray-600">
          No hay héroes aún...
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
            place-items-center
          "
        >
          {heroes.map((hero) => (
            <HeroCard key={hero.id} hero={hero} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HeroesList;


//--------------------------------------------------------------------------------




