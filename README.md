# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

Gestor de Superhéroes

Aplicación completa desarrollada con React + Vite + TailwindCSS que permite gestionar superhéroes a través de un CRUD completo utilizando una API REST (MockAPI).

Este proyecto fue desarrollado para el Sprint 5 de la diplomatura Full Stack.

🌟 Características principales

✔ CRUD completo (Crear, Leer, Editar y Eliminar superhéroes)
✔ Manejo global de estado con Context API
✔ Rutas estáticas y dinámicas con React Router DOM
✔ Peticiones HTTP con Axios
✔ Formularios controlados y validados
✔ Confirmaciones visuales con SweetAlert2
✔ Notificaciones con React Toastify
✔ Estilos con TailwindCSS
✔ Estructura modular, ordenada y escalable
✔ Extras: favoritos, filtros, modal de bienvenida

📸 Capturas (Opcional)

(Podés agregar screenshots acá si querés)

🗂️ Estructura del proyecto
src/
 ├── components/
 │   ├── Header.jsx
 │   ├── HeroCard.jsx
 │   ├── HeroForm.jsx
 │   ├── ModalIntro.jsx
 │
 ├── context/
 │   └── HeroesContext.jsx
 │
 ├── pages/
 │   ├── Home.jsx
 │   ├── HeroesList.jsx
 │   ├── HeroDetail.jsx
 │   ├── HeroCreate.jsx
 │   ├── HeroEdit.jsx
 │   ├── Favorites.jsx
 │   ├── Filter.jsx
 │   └── NotFound.jsx
 │
 ├── router/
 │   └── AppRouter.jsx
 │
 ├── services/
 │   └── api.js
 │
 ├── App.jsx
 └── main.jsx

🔧 Tecnologías utilizadas

React + Vite

React Router DOM

Context API

Axios

TailwindCSS

SweetAlert2

React Toastify

🚀 Demo en producción

🔗 Ver la aplicación en Netlify

(Reemplazar cuando la subas)

📡 API utilizada

Se utiliza un endpoint creado con MockAPI:

🔗 https://URL-DE-TU-MOCKAPI/super

Cada superhéroe contiene:
id, nombre, planeta, edad, habilidades, descripcion, imagen (opcional)
