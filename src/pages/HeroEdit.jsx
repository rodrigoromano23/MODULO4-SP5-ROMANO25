/*import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import HeroForm from "../components/heroForm";
import api from "../services/api";
import { toast } from "react-toastify";

const HeroEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [hero, setHero] = useState(null);

  useEffect(() => {
    const fetchHero = async () => {
      const { data } = await api.get(`/superheroes/${id}`);
      setHero(data);
    };
    fetchHero();
  }, [id]);

  const handleSubmit = async (form) => {
    try {
      await api.put(`/superheroes/${id}`, form);
      toast.success("Superhéroe actualizado correctamente");
      navigate("/heroes");
    } catch (error) {
      toast.error("Error al actualizar héroe");
    }
  };

  if (!hero) return <p className="text-center mt-10">Cargando...</p>;

  return (
    <div className="min-h-screen pt-24 p-6">
      <HeroForm initialData={hero} onSubmit={handleSubmit} />
    </div>
  );
};

export default HeroEdit;*/

/*import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import HeroForm from "../components/heroForm";
import api from "../services/api";
import { toast } from "react-toastify";

const HeroEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [hero, setHero] = useState(null);
  const [loading, setLoading] = useState(true);

  // Cargar héroe cuando el componente monta
  useEffect(() => {
    const fetchHero = async () => {
      try {
        const { data } = await api.get(`/super/${id}`);
        setHero({
          nombre: data.nombre,
          planeta: data.planeta,
          edad: data.edad,
          habilidades: data.habilidades.join(", "),
          descripcion: data.descripcion,
          imagen: data.imagen || "" // nuevo campo
        });
      } catch (error) {
        console.error(error);
        toast.error("Error al cargar el superhéroe");
      } finally {
        setLoading(false);
      }
    };

    fetchHero();
  }, [id]);

  // Enviar actualización
  const handleSubmit = async (form) => {
    try {
      const payload = {
        nombre: form.nombre.trim(),
        planeta: form.planeta.trim(),
        edad: Number(form.edad),
        habilidades: form.habilidades.split(",").map((h) => h.trim()),
        descripcion: form.descripcion.trim(),
        imagen: form.imagen.trim() // nuevo campo
      };

      await api.put(`/super/${id}`, payload);

      toast.success("Superhéroe actualizado con éxito");
      navigate("/heroes");
    } catch (error) {
      console.error(error);
      toast.error("Error al actualizar el héroe");
    }
  };

  if (loading) return <p className="pt-24 p-6">Cargando...</p>;

  return (
    <div className="min-h-screen pt-24 p-6">
      <h1 className="text-2xl font-semibold mb-4">Editar Superhéroe</h1>
      <HeroForm onSubmit={handleSubmit} initialValues={hero} />
    </div>
  );
};

export default HeroEdit;*/

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import HeroForm from "../components/heroForm";
import api from "../services/api";
import { toast } from "react-toastify";

const HeroEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [hero, setHero] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const { data } = await api.get(`/su/${id}`);
        setHero({
          nombre: data.nombre,
          planeta: data.planeta,
          edad: data.edad,
          habilidades: data.habilidades || "",
          descripcion: data.descripcion // URL de imagen
        });
      } catch (error) {
        console.error(error);
        toast.error("Error al cargar el superhéroe");
      } finally {
        setLoading(false);
      }
    };

    fetchHero();
  }, [id]);

  const handleSubmit = async (form) => {
    try {
      const payload = {
        nombre: form.nombre.trim(),
        planeta: form.planeta.trim(),
        edad: Number(form.edad),
        habilidades: form.habilidades.split(",").map((h) => h.trim()),
        descripcion: form.descripcion.trim() // sigue siendo la URL de la imagen
      };

      await api.put(`/su/${id}`, payload);

      toast.success("Superhéroe actualizado con éxito");
      navigate("/heroes");
    } catch (error) {
      console.error(error);
      toast.error("Error al actualizar el héroe");
    }
  };

  if (loading) return <p className="pt-24 p-6">Cargando...</p>;

  return (
    <div className="min-h-screen pt-24 p-6">
      <h1 className="text-2xl font-semibold mb-4">Editar Superhéroe</h1>
      <HeroForm onSubmit={handleSubmit} initialValues={hero} />
    </div>
  );
};

export default HeroEdit;




