/*import { useState, useContext } from "react";
import { HeroesContext } from "../context/HeroesContext";
import HeroCard from "../components/heroCard";
import { toast } from "react-toastify";

const Filter = () => {
  const { heroes } = useContext(HeroesContext);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = (value) => {
    setQuery(value);
    if (value.trim() === "") {
      setResults([]);
      return;
    }

    const filtered = heroes.filter((hero) =>
      hero.nombre.toLowerCase().startsWith(value.toLowerCase())
    );
    setResults(filtered);

    if (filtered.length > 0) {
      toast.success("¡Super! Encontrado");
    }
  };

  return (
    <div className="min-h-screen pt-24 p-6 text-center">
      <h1 className="text-3xl text-blue-600 font-bold mb-4">
        Filtrar Superhéroes
      </h1>

      <input
        type="text"
        placeholder="Buscar por nombre..."
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        className="border rounded-lg p-3 w-80 mb-6"
      />

      {results.length > 0 ? (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {results.map((hero) => (
  <div
    key={hero.id}
    className="bg-white/80 p-4 rounded-xl shadow-md text-left mb-4 max-w-2xl mx-auto"
  >
    <h2 className="text-xl font-bold text-blue-600">{hero.nombre}</h2>

    {hero.imagen && (
      <img
        src={hero.imagen}
        alt={hero.nombre}
        className="w-32 h-32 object-cover rounded-full my-3"
      />
    )}

    <p><b>Planeta:</b> {hero.planeta || hero.planetaOrigen}</p>
    <p><b>Edad:</b> {hero.edad}</p>
    <p><b>Habilidades:</b> {Array.isArray(hero.habilidades) ? hero.habilidades.join(", ") : hero.habilidades}</p>
    <p><b>Descripción:</b> {hero.descripcion}</p>
  </div>
))}

        </div>
      ) : (
        <p className="text-gray-600">Escribe para buscar un héroe...</p>
      )}
    </div>
  );
};

export default Filter;*/

/*import { useState, useContext } from "react";
import { HeroesContext } from "../context/HeroesContext";
import { toast } from "react-toastify";

const Filter = () => {
  const { heroes } = useContext(HeroesContext);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = (value) => {
    setQuery(value);
    if (value.trim() === "") {
      setResults([]);
      return;
    }

    const filtered = heroes.filter((hero) =>
      hero.nombre.toLowerCase().startsWith(value.toLowerCase())
    );
    setResults(filtered);

    if (filtered.length > 0) {
      toast.success("¡Super! Encontrado");
    }
  };

  return (
    <div className="min-h-screen pt-24 p-6 text-center">
      <h1 className="text-3xl text-blue-600 font-bold mb-4">
        Filtrar Superhéroes
      </h1>

      <input
        type="text"
        placeholder="Buscar por nombre..."
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        className="border rounded-lg p-3 w-80 mb-6"
      />

      {results.length > 0 ? (
        <div className="flex flex-col gap-8">
          {results.map((hero) => (
            <div
              key={hero.id}
              className="flex flex-col md:flex-row items-center md:items-start 
                        bg-transparent p-6 rounded-xl max-w-3xl mx-auto gap-6"
            >
              {/* COLUMNA IZQUIERDA — NOMBRE /}
              <div className="w-full md:w-1/3 text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-400 drop-shadow-lg">
                  {hero.nombre}
                </h2>

                {/* Imagen debajo del nombre /}
                {hero.imagen && (
                  <img
                    src={hero.imagen}
                    
                    className="w-100 h-50 object-cover rounded-full shadow-xl"
                  />
                )}
              </div>

              {/* COLUMNA DERECHA — IMAGEN + INFO /}
              <div className="w-full md:w-2/3 text-left space-y-3">
                

                <p>
                  <span className="font-bold text-blue-300">Planeta:</span>{" "}
                  {hero.planeta || hero.planetaOrigen}
                </p>

                <p>
                  <span className="font-bold text-blue-300">Edad:</span>{" "}
                  {hero.edad}
                </p>

                <p>
                  <span className="font-bold text-blue-300">Habilidades:</span>{" "}
                  {Array.isArray(hero.habilidades)
                    ? hero.habilidades.join(", ")
                    : hero.habilidades}
                </p>

                {hero.descripcion && (
                  <p>
                    <span className="font-bold text-blue-300">Descripción:</span>{" "}
                    {hero.descripcion}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">Escribe para buscar un héroe...</p>
      )}
    </div>
  );
};

export default Filter;
*/

import { useState, useContext } from "react";
import { HeroesContext } from "../context/HeroesContext";
import { toast } from "react-toastify";

const Filter = () => {
  const { heroes } = useContext(HeroesContext);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  // controla qué héroe muestra la imagen del link
  const [mostrarImagenId, setMostrarImagenId] = useState(null);

  const handleSearch = (value) => {
    setQuery(value);

    if (value.trim() === "") {
      setResults([]);
      return;
    }

    const filtered = heroes.filter((hero) =>
      hero.nombre.toLowerCase().startsWith(value.toLowerCase())
    );

    setResults(filtered);

    if (filtered.length > 0) {
      toast.success("¡Super! Encontrado");
    }
  };

  // Detecta si el link parece una imagen
  const esImagenPorExtension = (url) =>
    !!url && url.match(/\.(jpeg|jpg|gif|png|webp|svg|bmp)(\?.*)?$/i);

  return (
    <div className="min-h-screen pt-24 p-6 text-center">
      <h1 className="text-3xl text-blue-600 font-bold mb-4">
        Filtrar Superhéroes
      </h1>

      <input
        type="text"
        placeholder="Buscar por nombre..."
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        className="border rounded-lg p-3 w-80 mb-6"
      />

      {results.length > 0 ? (
        <div className="flex flex-col gap-8">
          {results.map((hero) => {
            // PRIORIDAD del link → descripción (donde vos ponés el URL)
            const link =
              (hero.descripcion && hero.descripcion.trim()) ||
              (hero.foto && hero.foto.trim()) ||
              (hero.imagen && hero.imagen.trim()) ||
              (hero.descripcion2 && hero.descripcion2.trim()) ||
              null;

            const mostrar = mostrarImagenId === hero.id;

            return (
              <div
                key={hero.id}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 
                           bg-transparent p-6 rounded-xl max-w-5xl mx-auto 
                           border-b border-gray-700 pb-10"
              >
                {/* =================== IZQUIERDA — NOMBRE =================== */}
                <div className="text-left flex flex-col justify-start">
                  <h2 className="text-3xl md:text-4xl font-bold text-blue-400 drop-shadow-lg">
                    {hero.nombre}
                  </h2>

                  {(hero.imagen || hero.foto) && (
                    <img
                      src={hero.imagen || hero.foto}
                      alt={hero.nombre}
                      className="w-24 h-24 object-cover rounded-full shadow-xl mt-3"
                      onError={(e) =>
                        (e.target.src =
                          "https://via.placeholder.com/150?text=No+disponible")
                      }
                    />
                  )}
                </div>

                {/* =================== CENTRO — INFORMACIÓN =================== */}
                <div className="text-left space-y-3">
                  <p>
                    <span className="font-bold text-blue-300">Planeta:</span>{" "}
                    {hero.planeta || hero.planetaOrigen}
                  </p>

                  <p>
                    <span className="font-bold text-blue-300">Edad:</span>{" "}
                    {hero.edad}
                  </p>

                  <p>
                    <span className="font-bold text-blue-300">Habilidades:</span>{" "}
                    {Array.isArray(hero.habilidades)
                      ? hero.habilidades.join(", ")
                      : hero.habilidades}
                  </p>

                  {/* Si el texto descripción no es un link de imagen, lo mostramos */}
                  {hero.descripcion && (
                    <p>
                      <span className="font-bold text-blue-300">Descripción:</span>{" "}
                      {!esImagenPorExtension(hero.descripcion)
                        ? hero.descripcion
                        : "(link de imagen, usa 'Ver imagen')"}
                    </p>
                  )}

                  {/* Mostrar link qué se va a abrir */}
                  {link && (
                    <p className="text-blue-500 break-all">
                      <strong>Link:</strong> {link}
                    </p>
                  )}

                  {/* 🔵 Botón VER IMAGEN en el centro */}
                  {link && (
                    <button
                      onClick={() =>
                        setMostrarImagenId(mostrar ? null : hero.id)
                      }
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700"
                    >
                      {mostrar ? "Ocultar imagen" : "Ver imagen"}
                    </button>
                  )}
                </div>

                {/* =================== DERECHA — IMAGEN =================== */}
                <div className="flex justify-center md:justify-start items-start">
                  {mostrar && link && (
                    <>
                      {esImagenPorExtension(link) ? (
                        <img
                          src={link}
                          alt={hero.nombre}
                          className="w-64 rounded shadow-lg object-contain"
                          onError={(e) =>
                            (e.target.src =
                              "https://via.placeholder.com/300?text=Imagen+no+disponible")
                          }
                        />
                      ) : (
                        <div className="w-full">
                          <iframe
                            src={link}
                            title={`preview-${hero.id}`}
                            className="w-full h-64 rounded border"
                          />
                          <p className="text-sm mt-2 text-gray-400">
                            Si la página no se muestra aquí, abrir en una nueva
                            pestaña.
                          </p>
                          <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 underline"
                          >
                            Abrir en nueva pestaña
                          </a>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-gray-600">Escribe para buscar un héroe...</p>
      )}
    </div>
  );
};

export default Filter;


