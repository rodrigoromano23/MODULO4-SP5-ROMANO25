import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";
import { toast } from "react-toastify";

const HeroDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [hero, setHero] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const { data } = await api.get(`/su/${id}`);
        setHero(data);
      } catch (error) {
        toast.error("No se pudo cargar el héroe.");
        navigate("/heroes"); // o la ruta que uses en tu proyecto
      } finally {
        setLoading(false);
      }
    };

    fetchHero();
  }, [id]);

  if (loading)
    return <p className="text-center mt-10 text-white text-xl">Cargando...</p>;

  if (!hero)
    return (
      <p className="text-center mt-10 text-red-500 text-xl">
        Héroe no encontrado
      </p>
    );

  const img =
    hero.imagen ||
    hero.foto ||
    hero.descripcion ||
    "https://via.placeholder.com/300?text=Sin+imagen";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white p-6">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 bg-gray-700 px-4 py-2 rounded hover:bg-gray-600 transition"
      >
        ← Volver
      </button>

      <div className="bg-black/60 p-8 rounded-2xl shadow-xl text-center w-full max-w-lg border border-white/10">
        <img
          src={img}
          alt={hero.nombre}
          className="w-48 h-48 object-cover rounded-full mx-auto mb-4 shadow-lg"
          onError={(e) =>
            (e.target.src =
              "https://via.placeholder.com/300?text=No+disponible")
          }
        />

        <h2 className="text-3xl font-bold text-blue-400">{hero.nombre}</h2>
        <p className="italic text-blue-200">{hero.nombreReal}</p>

        <div className="mt-4 space-y-2 text-lg">
          <p>
            <span className="font-bold text-blue-300">ID:</span> {hero.id}
          </p>

          <p>
            <span className="font-bold text-blue-300">Planeta:</span>{" "}
            {hero.planetaOrigen}
          </p>

          <p>
            <span className="font-bold text-blue-300">Edad:</span> {hero.edad}
          </p>

          <p>
            <span className="font-bold text-blue-300">Poderes:</span>{" "}
            {Array.isArray(hero.poderes)
              ? hero.poderes.join(", ")
              : hero.poderes}
          </p>

          {hero.debilidad && (
            <p>
              <span className="font-bold text-blue-300">Debilidad:</span>{" "}
              {hero.debilidad}
            </p>
          )}

          {hero.aliados && (
            <p>
              <span className="font-bold text-blue-300">Aliados:</span>{" "}
              {hero.aliados}
            </p>
          )}

          {hero.enemigos && (
            <p>
              <span className="font-bold text-blue-300">Enemigos:</span>{" "}
              {hero.enemigos}
            </p>
          )}

          {/* Si la descripción NO es un link, la mostramos */}
          {hero.descripcion &&
            !hero.descripcion.match(/\.(jpeg|jpg|gif|png|webp)$/i) && (
              <p className="text-sm text-gray-300 mt-4">
                <span className="font-bold text-blue-300">Descripción:</span>{" "}
                {hero.descripcion}
              </p>
            )}
        </div>

        <button
          onClick={() => navigate(`/heroes/${hero.id}/edit`)}
          className="mt-6 bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-500 transition"
        >
          Editar
        </button>
      </div>
    </div>
  );
};

export default HeroDetail;

