

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









