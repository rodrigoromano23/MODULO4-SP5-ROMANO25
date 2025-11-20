

import { useState, useEffect } from "react";

const HeroForm = ({ onSubmit, initialValues }) => {
  const [form, setForm] = useState({
    nombre: "",
    planeta: "",
    edad: "",
    habilidades: "",
    descripcion: ""
  });

  useEffect(() => {
    if (initialValues) {
      setForm({
        nombre: initialValues.nombre || "",
        planeta: initialValues.planeta || "",
        edad: initialValues.edad || "",
        habilidades: Array.isArray(initialValues.habilidades)
          ? initialValues.habilidades.join(", ")
          : initialValues.habilidades || "",
        descripcion: initialValues.descripcion || ""
      });
    }
  }, [initialValues]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
        bg-transparent
        max-w-3xl mx-auto 
        grid grid-cols-1 md:grid-cols-2 
        gap-4 p-6
      "
    >

      {/* Nombre */}
      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        value={form.nombre}
        onChange={handleChange}
        className="input w-full"
      />

      {/* Edad */}
      <input
        type="number"
        name="edad"
        placeholder="Edad"
        value={form.edad}
        onChange={handleChange}
        className="input w-full"
      />

      {/* Planeta e Historia — ANCHO COMPLETO, MÁS GRANDE, ABAJO */}
      <textarea
        name="planeta"
        placeholder="Planeta e Historia"
        value={form.planeta}
        onChange={handleChange}
        className="input w-full md:col-span-2 h-28"
      ></textarea>

      {/* Habilidades — Ancho completo */}
      <input
        type="text"
        name="habilidades"
        placeholder="Habilidades separadas por coma"
        value={form.habilidades}
        onChange={handleChange}
        className="input w-full md:col-span-2"
      />

      {/* URL imagen — Ancho completo */}
      <textarea
        name="descripcion"
        placeholder="Pegá aquí la URL de la imagen"
        value={form.descripcion}
        onChange={handleChange}
        className="input w-full md:col-span-2 h-10"
      ></textarea>

      {/* Botón */}
      <button
        className="
          bg-blue-600 text-white py-2 rounded 
          w-full md:col-span-2 hover:bg-blue-500
        "
      >
        Guardar superhéroe
      </button>
    </form>
  );
};

export default HeroForm;

















