/*import ModalIntro from "../components/ModalIntro";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center text-white">
      <ModalIntro />
      <h1 className="text-9xl italic text-blue-400">Bienvenido!</h1>
      <h2 className="text-2xl mt-2 italic text-blue-200">Crea tu superhéroe</h2>
      <button
        onClick={() => navigate("/heroes/create")}
        className="mt-6 bg-blue-600 px-6 py-3 rounded-lg text-lg hover:bg-blue-500 transition"
      >
        ¡Crea el tuyo!
      </button>
    </div>
  );
};

export default Home;*/

//------------------------------------------------------------------------------------------------

/*import ModalIntro from "../components/ModalIntro";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen w-full text-white overflow-hidden">
      <ModalIntro />

      <div className="absolute right-150 top-1/2 transform -translate-y-1/2 text-right">
        <h1 className="text-9xl italic text-blue-400">Bienvenido!</h1>
        <h2 className="text-2xl mt-2 italic text-blue-200">Crea tu superhéroe</h2>
        <button
          onClick={() => navigate("/heroes/create")}
          className="mt-6 bg-blue-600 px-6 py-3 rounded-lg text-lg hover:bg-blue-500 transition"
        >
          ¡Crea el tuyo!
        </button>
      </div>
    </div>
  );
};

export default Home;*/
//---------------------------------------------------------------------------


import { useState } from "react";
import ModalIntro from "../components/ModalIntro";
import HeroForm from "../components/heroForm";
import api from "../services/api";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const Home = () => {
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formKey, setFormKey] = useState(0);

  const handleCreateHero = async (form) => {
    try {
      setIsSubmitting(true);

      const payload = {
        nombre: form.nombre.trim(),
        planeta: form.planeta.trim(),
        edad: Number(form.edad),
        habilidades: form.habilidades.split(",").map((h) => h.trim()),
        descripcion: form.descripcion.trim(),
      };

      await api.post("/su", payload);
      toast.success("¡Superhéroe creado con éxito!");
      setFormKey((k) => k + 1);
      setShowForm(true);
    } catch {
      toast.error("Error al crear héroe");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-cover bg-center relative overflow-x-hidden">
      <ModalIntro />

      <div className="md:flex md:items-stretch min-h-screen">

        {/* LEFT BLOCK */}
        <div className="w-full md:w-1/2 flex flex-col h-screen overflow-y-auto">
          <div className="flex items-center justify-center text-right px-8 py-12 md:h-full">
            <div className="w-full">

              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-blue-400 italic leading-tight md:text-8xl text-5xl"
              >
                Bienvenido!
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
                className="text-blue-200 italic mt-2 text-2xl"
              >
                Crea tu superhéroe
              </motion.h2>

              <button
                onClick={() => setShowForm((s) => !s)}
                className="mt-8 bg-blue-600 px-6 py-3 rounded-lg text-lg hover:bg-blue-500 transition"
              >
                ¡Crea el tuyo!
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT BLOCK (DESKTOP) */}
        <div
          className="
            hidden md:flex
            w-full md:w-1/2
            bg-cover bg-center 
            relative
          "
          style={{
            backgroundImage: `url('/background-hero.jpg')`,
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={showForm ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
            transition={{ duration: 0.4 }}
            className="
              absolute right-30 top-[25%]
              w-[420px]
              bg-white/30 backdrop-blur-md
              rounded-xl shadow-xl
              p-4
            "
          >
            <HeroForm key={formKey} onSubmit={handleCreateHero} />
            {isSubmitting && (
              <p className="text-center mt-2 text-blue-600 text-sm">
                Guardando...
              </p>
            )}
          </motion.div>
        </div>
      </div>

      {/* FORMULARIO FLOATING → MOBILE • FULLSCREEN MODAL */}
      {showForm && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.4 }}
          className="
            fixed inset-0 z-[9999]
            flex md:hidden justify-center items-start
            pt-74
            px-5
            
          "
        >
          <div className="w-full max-w-md bg-white/25 backdrop-blur-md p-4 rounded-xl shadow-xl">
            <HeroForm key={formKey} onSubmit={handleCreateHero} />
            <button
              onClick={() => setShowForm(false)}
              className="mt-1 text-center w-full bg-red-500 text-white py-2 rounded-lg"
            >
              Cerrar
            </button>
          </div>
        </motion.div>
      )}

    </div>
  );
};

export default Home;
 







