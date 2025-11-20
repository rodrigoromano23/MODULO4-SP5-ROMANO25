/*import { useNavigate } from "react-router-dom";
import HeroForm from "../components/heroForm";
import api from "../services/api";
import { toast } from "react-toastify";

const HeroCreate = () => {
  const navigate = useNavigate();

  const handleSubmit = async (form) => {
    try {
      const payload = {
        nombre: form.nombre.trim(),
        planeta: form.planeta.trim(),
        edad: Number(form.edad),
        habilidades: form.habilidades.split(",").map((h) => h.trim()),
        descripcion: form.descripcion.trim()
      };

      await api.post("/super", payload);  // 👉 RECURSO CORRECTO

      toast.success("¡Superhéroe creado con éxito!");
      navigate("/heroes");
    } catch (error) {
      console.error(error);
      toast.error("Error al crear héroe");
    }
  };

  return (
    <div className="min-h-screen pt-24 p-6">
      <HeroForm onSubmit={handleSubmit} />
    </div>
  );
};

export default HeroCreate;*/

/*import { useNavigate } from "react-router-dom";
import HeroForm from "../components/heroForm";
import api from "../services/api";
import { toast } from "react-toastify";
import { useContext } from "react";
import { HeroesContext } from "../context/HeroesContext";

const HeroCreate = () => {
  const navigate = useNavigate();
  const { fetchHeroes } = useContext(HeroesContext); // 👈 IMPORTANTE

  const handleSubmit = async (form) => {
    try {
      const payload = {
        nombre: form.nombre.trim(),
        planeta: form.planeta.trim(),
        edad: Number(form.edad),
        habilidades: form.habilidades.split(",").map((h) => h.trim()),
        descripcion: form.descripcion.trim(),
        imagen: form.imagen.trim() //nuevo campo
      };

      await api.post("/super", payload);

      toast.success("¡Superhéroe creado con éxito!");

      // 🔥 VOLVEMOS A PEDIR LA LISTA DESPUÉS DE CREAR
      await fetchHeroes();

      toast.info("✔ El superhéroe ya está en la lista");

      navigate("/heroes");
    } catch (error) {
      console.error(error);
      toast.error("Error al crear héroe");
    }
  };

  return (
    <div className="min-h-screen pt-24 p-6">
      <HeroForm onSubmit={handleSubmit} />
    </div>
  );
};

export default HeroCreate;*/

import { useNavigate } from "react-router-dom";
import HeroForm from "../components/heroForm";
import api from "../services/api";
import { toast } from "react-toastify";
import { useContext } from "react";
import { HeroesContext } from "../context/HeroesContext";

const HeroCreate = () => {
  const navigate = useNavigate();
  const { fetchHeroes } = useContext(HeroesContext);

  const handleSubmit = async (form) => {
    try {
      const payload = {
        nombre: form.nombre.trim(),
        planeta: form.planeta.trim(),
        edad: Number(form.edad),
        habilidades: form.habilidades.trim(),
        descripcion: form.descripcion.trim(),
        historia: form.historia.trim(), // cambiado
      };

      console.log("PAYLOAD ENVIADO A MOCKAPI:", payload);

      await api.post("/su", payload);

      toast.success("¡Superhéroe creado con éxito!");
      await fetchHeroes();
      toast.info("✔ El superhéroe ya está en la lista");

      navigate("/heroes");
    } catch (error) {
      console.error(error);
      toast.error("Error al crear héroe");
    }
  };

  return (
    <div className="min-h-screen pt-24 p-6">
      <HeroForm onSubmit={handleSubmit} />
    </div>
  );
};

export default HeroCreate;









