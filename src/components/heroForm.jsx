/*import { useState } from "react";

const HeroForm = ({ initialData = {}, onSubmit }) => {
  const [form, setForm] = useState({
    nombre: "",
    nombreReal: "",
    planetaOrigen: "",
    edad: "",
    poderes: "",
    estado: "",
    altura: "",
    aliados: "",
    enemigos: "",
    imagen: "",
    velocidad: 0,
    fuerza: 0,
    inteligencia: 0,
    resistencia: 0,
    ...initialData,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto p-6 bg-white/90 backdrop-blur rounded-2xl shadow-lg space-y-4"
    >
      <h2 className="text-center text-xl font-bold">Formulario de Superhéroe</h2>

      {Object.keys(form).map((key) => (
        <div key={key} className="flex flex-col">
          <label className="capitalize">{key}</label>
          <input
            type={typeof form[key] === "number" ? "number" : "text"}
            name={key}
            value={form[key]}
            onChange={handleChange}
            className="border rounded p-2"
          />
        </div>
      ))}

      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-500 transition"
      >
        Guardar
      </button>
    </form>
  );
};

export default HeroForm;*/

/*import { useState, useEffect } from "react";

const HeroForm = ({ onSubmit, initialValues }) => {
  const [form, setForm] = useState(
    initialValues || {
      nombre: "",
      planeta: "",
      edad: "",
      habilidades: "",
      descripcion: "",
      imagen:"" // nuevo campo
    }
  );

  useEffect(() => {
    if (initialValues) setForm(initialValues);
  }, [initialValues]);

  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};

    if (!form.nombre.trim()) e.nombre = "El nombre es obligatorio.";
    else if (form.nombre.trim().length < 3) e.nombre = "Debe tener al menos 3 caracteres.";
    else if (form.nombre.trim().length > 30) e.nombre = "Máximo 30 caracteres.";

    if (!form.planeta.trim()) e.planeta = "El planeta es obligatorio.";
    else if (form.planeta.trim().length < 2) e.planeta = "Debe tener al menos 2 caracteres.";
    else if (form.planeta.trim().length > 20) e.planeta = "Máximo 20 caracteres.";

    if (!form.edad.trim()) e.edad = "La edad es obligatoria.";
    else if (isNaN(form.edad) || Number(form.edad) <= 0) e.edad = "Debe ser un número mayor a 0.";

    if (!form.habilidades.trim()) e.habilidades = "Debe ingresar al menos una habilidad.";

    if (!form.descripcion.trim()) e.descripcion = "La descripción es obligatoria.";
    else if (form.descripcion.trim().length < 10) e.descripcion = "Debe tener al menos 10 caracteres.";
    else if (form.descripcion.trim().length > 500) e.descripcion = "Máximo 500 caracteres.";

    //imagen
    if (form.imagen?.trim()) {
      const urlPattern = /^https?:\/\/.+\.(jpg|jpeg|png|webp|gif)$/i;
      if (!urlPattern.test(form.imagen.trim())) {
        e.imagen = "Debe ser una url valida que termine en .jpg, .png, .webp, o .gif";
      }
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">

      <div className="mb-2">
        <label className="text-sm block mb-1">Nombre</label>
        <input
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
          className="border p-1 h-7 w-full text-sm rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        {errors.nombre && <p className="text-red-500 text-xs mt-0.5">{errors.nombre}</p>}
      </div>

      <div className="mb-2">
        <label className="text-sm block mb-1">Planeta</label>
        <input
          name="planeta"
          value={form.planeta}
          onChange={handleChange}
          className="border p-1 h-7 w-full text-sm rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        {errors.planeta && <p className="text-red-500 text-xs mt-0.5">{errors.planeta}</p>}
      </div>

      <div className="mb-2">
        <label className="text-sm block mb-1">Edad</label>
        <input
          name="edad"
          value={form.edad}
          onChange={handleChange}
          className="border p-1 h-7 w-full text-sm rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        {errors.edad && <p className="text-red-500 text-xs mt-0.5">{errors.edad}</p>}
      </div>

      <div className="mb-2">
        <label className="text-sm block mb-1">Habilidades (separadas por coma)</label>
        <input
          name="habilidades"
          value={form.habilidades}
          onChange={handleChange}
          className="border p-1 h-7 w-full text-sm rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        {errors.habilidades && <p className="text-red-500 text-xs mt-0.5">{errors.habilidades}</p>}
      </div>

      <div className="mb-2">
        <label className="text-sm block mb-1">Descripción</label>
        <textarea
          name="descripcion"
          value={form.descripcion}
          onChange={handleChange}
          className="border p-1 w-full text-sm min-h-[50px] rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        {errors.descripcion && <p className="text-red-500 text-xs mt-0.5">{errors.descripcion}</p>}
      </div>
      {/* ⭐ NUEVO CAMPO IMAGEN /}
      <div className="mb-2">
        <label className="text-sm block mb-1">Imagen (URL)</label>
        <input
          name="imagen"
          value={form.imagen}
          onChange={handleChange}
          placeholder="https://ejemplo.com/imagen.jpg"
          className="border p-1 h-7 w-full text-sm rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        {errors.imagen && <p className="text-red-500 text-xs mt-0.5">{errors.imagen}</p>}
      </div>
      

      <button className="bg-blue-600 text-white px-3 py-1.5 text-sm rounded">
        Guardar
      </button>
    </form>
  );
};

export default HeroForm;*/

/*import { useState, useEffect } from "react";

const HeroForm = ({ onSubmit, initialValues }) => {
  const [form, setForm] = useState({
    nombre: "",
    planeta: "",
    edad: "",
    habilidades: "",
    descripcion: "",
    imagen: "" // nuevo campo
  });

  useEffect(() => {
    if (initialValues) {
      setForm({
        nombre: initialValues.nombre || "",
        planeta: initialValues.planeta || "",
        edad: initialValues.edad || "",
        habilidades: initialValues.habilidades || "",
        descripcion: initialValues.descripcion || "",
        imagen: initialValues.imagen || ""
      });
    }
  }, [initialValues]);

  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};

    // NOMBRE
    if (!form.nombre?.trim()) e.nombre = "El nombre es obligatorio.";
    else if (form.nombre.trim().length < 3) e.nombre = "Debe tener al menos 3 caracteres.";
    else if (form.nombre.trim().length > 30) e.nombre = "Máximo 30 caracteres.";

    // PLANETA
    if (!form.planeta?.trim()) e.planeta = "El planeta es obligatorio.";
    else if (form.planeta.trim().length < 2) e.planeta = "Debe tener al menos 2 caracteres.";
    else if (form.planeta.trim().length > 20) e.planeta = "Máximo 20 caracteres.";

    // EDAD
    if (!form.edad?.trim()) e.edad = "La edad es obligatoria.";
    else if (isNaN(form.edad) || Number(form.edad) <= 0) e.edad = "Debe ser un número mayor a 0.";

    // HABILIDADES
    if (!form.habilidades?.trim()) e.habilidades = "Debe ingresar al menos una habilidad.";

    // DESCRIPCION
    if (!form.descripcion?.trim()) e.descripcion = "La descripción es obligatoria.";
    else if (form.descripcion.trim().length < 10) e.descripcion = "Debe tener al menos 10 caracteres.";
    else if (form.descripcion.trim().length > 500) e.descripcion = "Máximo 500 caracteres.";

    // IMAGEN (opcional pero valida)
    if (form.imagen?.trim()) {
      const urlPattern = /^https?:\/\/\S+$/i;
      if (!urlPattern.test(form.imagen.trim())) {
        e.imagen = "Debe ser una URL válida que termine en .jpg, .png, .webp o .gif";
      }
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">

      <div className="mb-2">
        <label className="text-sm block mb-1">Nombre</label>
        <input
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
          className="border p-1 h-7 w-full text-sm rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        {errors.nombre && <p className="text-red-500 text-xs mt-0.5">{errors.nombre}</p>}
      </div>

      <div className="mb-2">
        <label className="text-sm block mb-1">Planeta</label>
        <input
          name="planeta"
          value={form.planeta}
          onChange={handleChange}
          className="border p-1 h-7 w-full text-sm rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        {errors.planeta && <p className="text-red-500 text-xs mt-0.5">{errors.planeta}</p>}
      </div>

      <div className="mb-2">
        <label className="text-sm block mb-1">Edad</label>
        <input
          name="edad"
          value={form.edad}
          onChange={handleChange}
          className="border p-1 h-7 w-full text-sm rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        {errors.edad && <p className="text-red-500 text-xs mt-0.5">{errors.edad}</p>}
      </div>

      <div className="mb-2">
        <label className="text-sm block mb-1">Habilidades (separadas por coma)</label>
        <input
          name="habilidades"
          value={form.habilidades}
          onChange={handleChange}
          className="border p-1 h-7 w-full text-sm rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        {errors.habilidades && <p className="text-red-500 text-xs mt-0.5">{errors.habilidades}</p>}
      </div>

      <div className="mb-2">
        <label className="text-sm block mb-1">Descripción</label>
        <textarea
          name="descripcion"
          value={form.descripcion}
          onChange={handleChange}
          className="border p-1 w-full text-sm min-h-[50px] rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        {errors.descripcion && <p className="text-red-500 text-xs mt-0.5">{errors.descripcion}</p>}
      </div>

      {/* ⭐ NUEVO CAMPO IMAGEN /}
      <div className="mb-2">
        <label className="text-sm block mb-1">Imagen (URL)</label>
        <input
          name="imagen"
          value={form.imagen}
          onChange={handleChange}
          placeholder="https://ejemplo.com/imagen.jpg"
          className="border p-1 h-7 w-full text-sm rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        {errors.imagen && <p className="text-red-500 text-xs mt-0.5">{errors.imagen}</p>}
      </div>

      <button className="bg-blue-600 text-white px-3 py-1.5 text-sm rounded">
        Guardar
      </button>
    </form>
  );
};

export default HeroForm;*/

/*import { useState, useEffect } from "react";

const HeroForm = ({ onSubmit, initialValues }) => {
  const [form, setForm] = useState({
    nombre: "",
    planeta: "",
    edad: "",
    habilidades: "",
    descripcion: "",
    foto: "" // cambiado de imagen → foto
  });

  useEffect(() => {
    if (initialValues) {
      setForm({
        nombre: initialValues.nombre || "",
        planeta: initialValues.planeta || "",
        edad: initialValues.edad || "",
        habilidades: initialValues.habilidades || "",
        descripcion: initialValues.descripcion || "",
        foto: initialValues.foto || "" // cambiado
      });
    }
  }, [initialValues]);

  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};

    if (!form.nombre?.trim()) e.nombre = "El nombre es obligatorio.";
    else if (form.nombre.trim().length < 3) e.nombre = "Debe tener al menos 3 caracteres.";
    else if (form.nombre.trim().length > 30) e.nombre = "Máximo 30 caracteres.";

    if (!form.planeta?.trim()) e.planeta = "El planeta es obligatorio.";
    else if (form.planeta.trim().length < 2) e.planeta = "Debe tener al menos 2 caracteres.";
    else if (form.planeta.trim().length > 20) e.planeta = "Máximo 20 caracteres.";

    if (!form.edad?.trim()) e.edad = "La edad es obligatoria.";
    else if (isNaN(form.edad) || Number(form.edad) <= 0) e.edad = "Debe ser un número mayor a 0.";

    if (!form.habilidades?.trim()) e.habilidades = "Debe ingresar al menos una habilidad.";

    if (!form.descripcion?.trim()) e.descripcion = "La descripción es obligatoria.";
    else if (form.descripcion.trim().length < 10) e.descripcion = "Debe tener al menos 10 caracteres.";
    else if (form.descripcion.trim().length > 500) e.descripcion = "Máximo 500 caracteres.";

    // 📌 VALIDACIÓN DEL CAMPO FOTO (URL)
    if (form.foto?.trim()) {
      const urlPattern = /^https?:\/\/\S+$/i;
      if (!urlPattern.test(form.foto.trim())) {
        e.foto = "Debe ser una URL válida que termine en .jpg, .png, .webp o .gif";
      }
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("HANDLE SUBMIT SE EJECUTO", form);
    if (validate()) onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">

      <div className="mb-2">
        <label className="text-sm block mb-1">Nombre</label>
        <input
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
          className="border p-1 h-7 w-full text-sm rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        {errors.nombre && <p className="text-red-500 text-xs mt-0.5">{errors.nombre}</p>}
      </div>

      <div className="mb-2">
        <label className="text-sm block mb-1">Planeta</label>
        <input
          name="planeta"
          value={form.planeta}
          onChange={handleChange}
          className="border p-1 h-7 w-full text-sm rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        {errors.planeta && <p className="text-red-500 text-xs mt-0.5">{errors.planeta}</p>}
      </div>

      <div className="mb-2">
        <label className="text-sm block mb-1">Edad</label>
        <input
          name="edad"
          value={form.edad}
          onChange={handleChange}
          className="border p-1 h-7 w-full text-sm rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        {errors.edad && <p className="text-red-500 text-xs mt-0.5">{errors.edad}</p>}
      </div>

      <div className="mb-2">
        <label className="text-sm block mb-1">Habilidades (separadas por coma)</label>
        <input
          name="habilidades"
          value={form.habilidades}
          onChange={handleChange}
          className="border p-1 h-7 w-full text-sm rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        {errors.habilidades && <p className="text-red-500 text-xs mt-0.5">{errors.habilidades}</p>}
      </div>

      <div className="mb-2">
        <label className="text-sm block mb-1">Descripción</label>
        <textarea
          name="descripcion"
          value={form.descripcion}
          onChange={handleChange}
          className="border p-1 w-full text-sm min-h-[50px] rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        {errors.descripcion && <p className="text-red-500 text-xs mt-0.5">{errors.descripcion}</p>}
      </div>

      {/* ⭐ CAMPO FOTO (url) /}
      <div className="mb-2">
        <label className="text-sm block mb-1">Foto (URL)</label>
        <input
          name="foto"
          value={form.foto}
          onChange={handleChange}
          placeholder="https://ejemplo.com/imagen.jpg"
          className="border p-1 h-7 w-full text-sm rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        {errors.foto && <p className="text-red-500 text-xs mt-0.5">{errors.foto}</p>}
      </div>

      <button className="bg-blue-600 text-white px-3 py-1.5 text-sm rounded">
        Guardar
      </button>
    </form>
  );
};

export default HeroForm;*/

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

















