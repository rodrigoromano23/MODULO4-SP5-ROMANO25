import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => setOpen(!open);

  const isMobile = window.innerWidth < 640;

  return (
    <header
      className="
        fixed top-10 z-50
        left-4 sm:left-1/2 sm:transform sm:-translate-x-1/2
      "
    >
      {/* 🔥 ESTE CONTENEDOR YA NO CRECE NI SE MUEVE */}
      <div className="relative w-14 h-14 flex items-center justify-center">
        
        {/* BOTÓN PRINCIPAL (NO SE MUEVE NUNCA) */}
        <button
          onClick={toggleMenu}
          className="
            absolute top-0 left-0 right-0 bottom-0
            bg-blue-600 text-white rounded-full w-14 h-14
            flex items-center justify-center shadow-lg 
            hover:bg-blue-500 transition
          "
        >
          ☰
        </button>

        {/* MENÚ */}
        {open && (
          <>
            {/* ----- MOBILE ----- */}
            {isMobile ? (
              <div className="absolute top-16 left-0 bg-white shadow-lg rounded-2xl p-4 flex flex-col gap-3 text-center w-40">
                <button
                  onClick={() => navigate("/heroes")}
                  className="bg-blue-100 hover:bg-blue-300 rounded-full px-4 py-2 text-sm"
                >
                  Listado
                </button>

                <button
                  onClick={() => navigate("/filter")}
                  className="bg-blue-100 hover:bg-blue-300 rounded-full px-4 py-2 text-sm"
                >
                  Filtrar
                </button>

                <button
                  onClick={() => navigate("/")}
                  className="bg-blue-100 hover:bg-blue-300 rounded-full px-4 py-2 text-sm"
                >
                  Inicio
                </button>

                <button
                  onClick={() => navigate("/favorites")}
                  className="bg-blue-100 hover:bg-blue-300 rounded-full px-4 py-2 text-sm"
                >
                  Favoritos
                </button>
              </div>
            ) : (
              <>
                {/* ----- ANIMACIONES PC: NO MUEVEN AL BOTÓN ----- */}
                <motion.button
                  onClick={() => navigate("/heroes")}
                  initial={{ x: 0, opacity: 0 }}
                  animate={{ x: -250, opacity: 1 }}
                  className="absolute top-1/2 -translate-y-1/2 left-0 bg-white rounded-full shadow px-3 py-2 text-sm hover:bg-blue-300 whitespace-nowrap"
                >
                  Listado
                </motion.button>

                <motion.button
                  onClick={() => navigate("/filter")}
                  initial={{ x: 0, opacity: 0 }}
                  animate={{ x: -500, opacity: 1 }}
                  className="absolute top-1/2 -translate-y-1/2 left-0 bg-white rounded-full shadow px-3 py-2 text-sm hover:bg-blue-300 whitespace-nowrap"
                >
                  Filtrar
                </motion.button>

                <motion.button
                  onClick={() => navigate("/")}
                  initial={{ x: 0, opacity: 0 }}
                  animate={{ x: 250, opacity: 1 }}
                  className="absolute top-1/2 -translate-y-1/2 right-0 bg-white rounded-full shadow px-3 py-2 text-sm hover:bg-blue-300 whitespace-nowrap"
                >
                  Inicio
                </motion.button>

                <motion.button
                  onClick={() => navigate("/favorites")}
                  initial={{ x: 0, opacity: 0 }}
                  animate={{ x: 500, opacity: 1 }}
                  className="absolute top-1/2 -translate-y-1/2 right-0 bg-white rounded-full shadow px-3 py-2 text-sm hover:bg-blue-300 whitespace-nowrap"
                >
                  Favoritos
                </motion.button>
              </>
            )}
          </>
        )}
      </div>
    </header>
  );
};

export default Header;



